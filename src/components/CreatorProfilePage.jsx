import React from 'react';

const CreatorProfilePage = () => {
  const username = "Username"; // Replace with dynamic username
  const subscriberCount = 123; // Replace with dynamic subscriber count
  const followingCount = 45; // Replace with dynamic following count

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Combined Profile Header, Upload Button, and Sections */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Profile Header with Subscribers and Following Count */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Creator Profile</h1>
              <p className="text-gray-600 mt-2">{username}</p>
              <div className="flex justify-start text-gray-600 mt-2">
                <span className="mr-4">{subscriberCount} Subscribers</span>
                <span>Following: {followingCount}</span>
              </div>
            </div>
            <button className="bg-indigo-200 hover:bg-indigo-300 text-gray-800 px-4 py-2 rounded-lg self-start">
              Settings
            </button>
          </div>

          {/* Upload Button Section */}
          <div className="mb-6">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold">
              Upload New Content
            </button>
          </div>

          {/* Content Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Content</h2>
          <p className="text-gray-600 mb-4">Manage your published content here.</p>
          {/* List of content items with options to edit/delete */}

          {/* Payments Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Payments</h2>
          <p className="text-gray-600 mb-4">View your earnings and payment history.</p>
          {/* Add payment details and history here */}

        </div>
      </div>
    </div>
  );
};

export default CreatorProfilePage;
