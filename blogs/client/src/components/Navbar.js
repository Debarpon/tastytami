import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">InkFlow</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-blue-600"
              >
                Explore
              </Link>
              <Link
                to="/write"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-blue-600"
              >
                Write
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-500 hover:text-blue-600"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
          >
            Explore
          </Link>
          <Link
            to="/write"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
          >
            Write
          </Link>
          <Link
            to="/login"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="block pl-3 pr-4 py-2 text-base font-medium text-blue-600 hover:bg-gray-50"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
