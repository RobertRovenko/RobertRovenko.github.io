import React from 'react';

// Sample data for creators and content
const creators = [
  {
    name: 'Alice Johnson',
    bio: 'A talented creator known for amazing content in various fields.',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Bob Smith',
    bio: 'Expert in technology and gadget reviews.',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Catherine Lee',
    bio: 'Passionate about cooking and sharing recipes.',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'David Kim',
    bio: 'An adventurous travel vlogger exploring the globe.',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Eva Chen',
    bio: 'A fitness enthusiast sharing workout routines.',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Frank Wright',
    bio: 'Creative writer and storyteller.',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

// Sample trending content with Unsplash image URLs
const trendingContent = [
  {
    title: 'Understanding AI',
    description: 'A deep dive into artificial intelligence and its impact.',
    thumbnail: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Travel Tips',
    description: 'Explore the must-visit places around the world.',
    thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Cooking Courses',
    description: 'Learn how to cook nutritious meals easily.',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Photography Basics',
    description: 'Get started with photography with these essential tips.',
    thumbnail: 'https://images.unsplash.com/photo-1486916856992-e4db22c8df33?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Yoga for Beginners',
    description: 'A guide to starting your yoga journey.',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Creative Writing Techniques',
    description: 'Enhance your writing skills with these strategies.',
    thumbnail: 'https://images.unsplash.com/photo-1605819048853-e2ae489e1360?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const SearchDiscoverPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r bg-gray-900 to-blue-900 pb-20 pt-40 -mt-20">
      <div className="container mx-auto">
        {/* Unified Background for Search, Featured Creators, Trending Content, and Categories */}
        <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-md">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search creators or content..."
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
            />
          </div>

          {/* Featured Creators Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Featured Creators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Render creators with profile pictures */}
              {creators.map((creator, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg shadow flex items-start">
                  <img
                    src={creator.profilePic}
                    alt={creator.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{creator.name}</h3>
                    <p className="text-gray-300">{creator.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Content Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Trending Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Render trending content with thumbnails */}
              {trendingContent.map((content, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg shadow">
                  <img
                    src={content.thumbnail}
                    alt={content.title}
                    className="w-full h-40 rounded-lg mb-2 object-cover"
                  />
                  <h3 className="text-lg font-bold text-white">{content.title}</h3>
                  <p className="text-gray-300">{content.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags/Categories Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Explore Categories</h2>
            <div className="flex flex-wrap gap-2">
              {/* Expanded Category Tags */}
              {['Art', 'Music', 'Fitness', 'Photography', 'Writing', 'Technology', 'Travel', 'Cooking', 'Gaming', 'Fashion'].map((category, index) => (
                <span key={index} className="bg-indigo-700 text-white px-3 py-1 rounded-full cursor-pointer">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDiscoverPage;
