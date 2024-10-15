import React from 'react';

const SearchDiscoverPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Unified Background for Search, Featured Creators, Trending Content, and Categories */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search creators or content..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Featured Creators Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Creators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Replace with dynamic featured creators */}
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-700">Creator 1</h3>
                <p className="text-gray-600">Short bio or description</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-700">Creator 2</h3>
                <p className="text-gray-600">Short bio or description</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-700">Creator 3</h3>
                <p className="text-gray-600">Short bio or description</p>
              </div>
            </div>
          </div>

          {/* Trending Content Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trending Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Replace with dynamic content */}
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-700">Content 1</h3>
                <p className="text-gray-600">Short description</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-700">Content 2</h3>
                <p className="text-gray-600">Short description</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-700">Content 3</h3>
                <p className="text-gray-600">Short description</p>
              </div>
            </div>
          </div>

          {/* Tags/Categories Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explore Categories</h2>
            <div className="flex flex-wrap gap-2">
              {/* Example tags, replace with dynamic ones */}
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full cursor-pointer">Art</span>
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full cursor-pointer">Music</span>
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full cursor-pointer">Fitness</span>
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full cursor-pointer">Photography</span>
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full cursor-pointer">Writing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDiscoverPage;
