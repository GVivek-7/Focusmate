import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Save } from 'lucide-react';

const SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'Computer Science', 'History', 'Literature', 'Economics',
  'Psychology', 'Philosophy', 'Art History', 'Political Science'
];

const ProfileSetup = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const toggleSubject = (subject: string) => {
    const newSubjects = new Set(selectedSubjects);
    if (newSubjects.has(subject)) {
      newSubjects.delete(subject);
    } else {
      newSubjects.add(subject);
    }
    setSelectedSubjects(newSubjects);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save profile to Supabase
    navigate('/matches');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Set Up Your Study Profile</h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Your Subjects
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SUBJECTS.map((subject) => (
                <button
                  key={subject}
                  type="button"
                  onClick={() => toggleSubject(subject)}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors
                    ${selectedSubjects.has(subject)
                      ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-500'
                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-indigo-300'
                    }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;