import React from 'react';

// Dummy data for content and payments
const dummyContent = [
  {
    title: 'My First Video',
    date: '2024-10-01',
    views: 500,
  },
  {
    title: 'A Day in My Life',
    date: '2024-09-15',
    views: 300,
  },
  {
    title: 'Top 10 Tips for Success',
    date: '2024-08-20',
    views: 450,
  },
];

const paymentHistory = [
  {
    date: '2024-10-05',
    amount: '$150.00',
    status: 'Completed',
  },
  {
    date: '2024-09-10',
    amount: '$200.00',
    status: 'Completed',
  },
  {
    date: '2024-08-15',
    amount: '$75.00',
    status: 'Pending',
  },
];

const CreatorProfilePage = () => {
  const username = "Username"; // Replace with dynamic username
  const subscriberCount = 123; // Replace with dynamic subscriber count
  const followingCount = 45; // Replace with dynamic following count
  const profilePic = 'https://randomuser.me/api/portraits/women/8.jpg'; // Sample profile picture

  return (
    <div className="min-h-screen bg-gray-900 p-6 pt-40 -mt-20">
      <div className="container mx-auto">
        {/* Combined Profile Header, Upload Button, and Sections */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Profile Header with Subscribers and Following Count */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <img
                src={profilePic}
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">{username}</h1>
                <div className="flex justify-start text-gray-400 mt-2">
                  <span className="mr-4">{subscriberCount} Subscribers</span>
                  <span>Following: {followingCount}</span>
                </div>
              </div>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg self-start">
              Settings
            </button>
          </div>

          {/* Upload Button Section */}
          <div className="mb-6">
            <button className="w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold">
              Upload New Content
            </button>
          </div>

          {/* Content Section */}
          <h2 className="text-2xl font-semibold text-white mb-2">Your Content</h2>
          <p className="text-gray-400 mb-4">Manage your published content here.</p>
          <ul className="mb-6">
            {dummyContent.map((item, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded-lg mb-2 shadow">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">Published on: {item.date}</p>
                <p className="text-gray-400">Views: {item.views}</p>
              </li>
            ))}
          </ul>

          {/* Payments Section */}
          <h2 className="text-2xl font-semibold text-white mb-2">Payments</h2>
          <p className="text-gray-400 mb-4">View your earnings and payment history.</p>
          <ul>
            {paymentHistory.map((payment, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded-lg mb-2 shadow">
                <p className="text-white">Date: {payment.date}</p>
                <p className="text-white">Amount: {payment.amount}</p>
                <p className={`text-gray-400 ${payment.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                  Status: {payment.status}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfilePage;
