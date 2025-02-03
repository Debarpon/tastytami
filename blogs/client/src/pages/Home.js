import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Where Ideas Find Their Voice
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join a community of writers, thinkers, and creators. Share your stories, connect with readers,
          and build your audience.
        </p>
        <div className="space-x-4">
          <Link
            to="/write"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Start Writing
          </Link>
          <Link
            to="/explore"
            className="inline-block px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Explore Stories
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Trending Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample post cards - will be dynamic in production */}
          {[1, 2, 3].map((i) => (
            <article key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={`https://source.unsplash.com/random/800x600?${i}`}
                alt="Post cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Sample Blog Post Title {i}
                </h3>
                <p className="text-gray-600">
                  A brief preview of the blog post content that gives readers an idea of what to expect...
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://source.unsplash.com/random/40x40?face${i}`}
                    alt="Author"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Author Name</p>
                    <p className="text-sm text-gray-500">5 min read</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
