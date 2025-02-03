import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('posts');

  // Sample data - will be replaced with real data from API
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and start building modern web applications...',
      status: 'published',
      date: '2025-01-20',
      views: 1234,
      likes: 89
    },
    {
      id: 2,
      title: 'The Future of AI',
      excerpt: 'Exploring the possibilities and challenges of artificial intelligence...',
      status: 'draft',
      date: '2025-01-22',
      views: 0,
      likes: 0
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Link
            to="/write"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            New Post
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Posts', value: '12' },
            { label: 'Total Views', value: '5.2K' },
            { label: 'Total Likes', value: '328' },
            { label: 'Followers', value: '156' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Content Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['posts', 'analytics', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Posts List */}
        {activeTab === 'posts' && (
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className={`
                        px-2 py-1 rounded-full text-xs
                        ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }
                      `}>
                        {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500">
                      <div>{post.views} views</div>
                      <div>{post.likes} likes</div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Edit</span>
                      {/* Edit icon */}
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
