import React, { useState } from 'react';
import { FaUserPlus, FaLock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUpLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up
  const navigate = useNavigate(); // Hook to navigate

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Here, you can handle authentication logic (e.g., API calls)

    // Navigate to CreatorProfilePage after login/signup
    navigate('/creator/:id');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <p className="text-center text-gray-600 mt-2">{isLogin ? 'Welcome back! Please login.' : 'Create an account to get started.'}</p>

            {/* Toggle Button */}
            <div className="mt-4 text-center">
              <button
                onClick={toggleForm}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
              </button>
            </div>

            {/* Form */}
            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Sign Up
                  </button>
                </>
              )}

              {isLogin && (
                <>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Login
                  </button>
                </>
              )}
            </form>

            {/* OR Divider */}
            <div className="mt-6 text-center">
              <span className="text-gray-500">OR</span>
            </div>

            {/* Social Media Login */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">Or connect with:</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <FaFacebookF className="w-8 h-8" />
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <FaTwitter className="w-8 h-8" />
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <FaInstagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <FaLinkedinIn className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpLoginPage;
