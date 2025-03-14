import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Target } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Find Your Perfect</span>
            <span className="block text-indigo-600">Study Partner</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with students who share your academic interests. Study together, stay motivated, and achieve your goals.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate('/signup')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Matching</h3>
              <p className="mt-2 text-base text-gray-500">
                Find study partners based on shared subjects and learning goals
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Subject Focus</h3>
              <p className="mt-2 text-base text-gray-500">
                Connect with peers studying the same subjects as you
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Goal Setting</h3>
              <p className="mt-2 text-base text-gray-500">
                Track your progress and achieve your academic goals together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;