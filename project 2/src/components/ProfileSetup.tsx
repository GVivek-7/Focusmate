import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { BookOpen, Save } from 'lucide-react';

const SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'Computer Science', 'Literature', 'History',
  'Economics', 'Psychology', 'Philosophy',
  'Art History', 'Political Science', 'Sociology',
  'Engineering', 'Business', 'Marketing'
];

const ProfileSetup = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSubjects.length === 0) {
      setError('Please select at least one subject');
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      setError('No user found. Please sign in again.');
      return;
    }

    try {
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        subjects: selectedSubjects,
        createdAt: new Date().toISOString(),
      });
      navigate('/matches');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <BookOpen className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Select Your Subjects
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Choose the subjects you're studying to find the perfect study buddy
          </p>
        </div>

        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SUBJECTS.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => toggleSubject(subject)}
                className={`p-4 text-left rounded-lg border ${
                  selectedSubjects.includes(subject)
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Save className="h-5 w-5 mr-2" />
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;