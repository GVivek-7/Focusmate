import React, { useState } from 'react';
import { Users, MessageSquare } from 'lucide-react';
import Chat from './Chat';

const MatchResults = () => {
  const [showChat, setShowChat] = useState(false);
  
  // TODO: Fetch and calculate matches using Supabase and Jaccard similarity
  const dummyMatches = [
    { id: 1, name: 'Alice Chen', similarity: 0.8, subjects: ['Mathematics', 'Physics', 'Computer Science'] },
    { id: 2, name: 'Bob Smith', similarity: 0.7, subjects: ['Physics', 'Chemistry', 'Mathematics'] },
    { id: 3, name: 'Carol Johnson', similarity: 0.6, subjects: ['Computer Science', 'Mathematics', 'Economics'] },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Users className="h-6 w-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Your Study Matches</h1>
        </div>

        <div className="space-y-4">
          {dummyMatches.map((match) => (
            <div
              key={match.id}
              className="border rounded-lg p-4 hover:border-indigo-500 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{match.name}</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {match.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Match Score:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {(match.similarity * 100).toFixed(0)}%
                    </span>
                  </div>
                  <button
                    onClick={() => setShowChat(true)}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showChat && <Chat />}
    </div>
  );
};

export default MatchResults;