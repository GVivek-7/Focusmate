import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, MessageSquare, Check, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Find Your Perfect</span>
                <span className="block text-indigo-600">Study Partner</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Connect with students who share your academic interests. Boost your learning through collaborative study sessions.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/profile"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Students studying together"
        />
      </div>

      {/* Subscription Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Study Plan
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Select the plan that best fits your study needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Basic</h3>
            <p className="mt-4 text-sm text-gray-500">Perfect for getting started</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
              <span className="text-base font-medium text-gray-500">/month</span>
            </p>
            <ul className="mt-6 space-y-4">
              {['5 matches per day', 'Basic chat', 'Subject matching'].map((feature) => (
                <li key={feature} className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-sm text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/profile"
              className="mt-8 block w-full bg-gray-800 text-white text-center px-4 py-2 rounded-md hover:bg-gray-900"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-indigo-500 rounded-lg shadow-sm p-6 bg-white relative">
            <span className="absolute top-0 right-0 -mt-2 -mr-1 px-2 py-1 bg-indigo-500 text-white text-xs font-medium rounded">Popular</span>
            <h3 className="text-lg font-medium text-gray-900">Pro</h3>
            <p className="mt-4 text-sm text-gray-500">For serious learners</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">$15</span>
              <span className="text-base font-medium text-gray-500">/month</span>
            </p>
            <ul className="mt-6 space-y-4">
              {[
                'Unlimited matches',
                'Advanced chat features',
                'Video calls',
                'Study group creation',
                'Priority matching'
              ].map((feature) => (
                <li key={feature} className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-sm text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/profile"
              className="mt-8 block w-full bg-indigo-600 text-white text-center px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Subscribe to Pro
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Premium</h3>
            <p className="mt-4 text-sm text-gray-500">For professional students</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">$25</span>
              <span className="text-base font-medium text-gray-500">/month</span>
            </p>
            <ul className="mt-6 space-y-4">
              {[
                'All Pro features',
                'AI study recommendations',
                'Personal study coach',
                'Analytics dashboard',
                'Custom study plans'
              ].map((feature) => (
                <li key={feature} className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-sm text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/profile"
              className="mt-8 block w-full bg-gray-800 text-white text-center px-4 py-2 rounded-md hover:bg-gray-900"
            >
              Subscribe to Premium
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;