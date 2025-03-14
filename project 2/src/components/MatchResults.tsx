import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Users, BookOpen, MessageSquare } from 'lucide-react';
import { jaccard_similarity } from '../utils/similarity';

interface Match {
  id: string;
  email: string;
  subjects: string[];
  similarity: number;
}

const MatchResults = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          navigate('/login');
          return;
        }

        // Get current user's subjects
        const userDoc = await getDocs(collection(db, 'users'));
        const currentUserData = userDoc.docs
          .find(doc => doc.id === user.uid)
          ?.data();

        if (!currentUserData) {
          setError('User profile not found');
          return;
        }

        // Get all users
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const users = usersSnapshot.docs
          .filter(doc => doc.id !== user.uid)
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

        // Calculate similarity scores
        const matchesWithScores = users.map(otherUser => ({
          id: otherUser.id,
          email: otherUser.email,
          subjects: otherUser.subjects,
          similarity: jaccard_similarity(currentUserData.subjects, otherUser.subjects)
        }));

        // Sort by similarity score
        const sortedMatches = matchesWithScores.sort((a, b) => b.similarity - a.similarity);
        setMatches(sortedMatches);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Users className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Your Study Buddy Matches
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Connect with students who share your academic interests
          </p>
        </div>

        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{match.email}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>
                      {match.subjects.join(', ')}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {Math.round(match.similarity * 100)}% Match
                  </span>
                  <button
                    onClick={() => {/* TODO: Implement chat */}}
                    className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}

          {matches.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No matches found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try updating your subjects to find more study buddies
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchResults;