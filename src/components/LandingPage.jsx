import React from 'react';
import {
  FaUsers,
  FaDollarSign,
  FaShieldAlt,
  FaCheck,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaQuestionCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex-col">

    <section 
      className=" bg-cover bg-center h-screen z-0 -mt-20 pt-20" 
      style={{ backgroundImage: 'url(/images/herobackground.png)'}}
      >
    <div className="inset-0 bg-black opacity-50 pointer-events-none"></div> {/* Prevent mouse events */}

      <div className="z-0 inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col justify-center items-center text-center px-4 h-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">Connect. Create. Monetize.</h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl">
          Join a community where creators thrive and fans engage with exclusive content tailored just for you.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/login">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              For Creators
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              For Fans
            </button>
          </Link>
        </div>
      </div>
    </section>


      {/* Features Section */}
      <section className="bg-gray-900 py-20">        
        <div className="container mx-auto px-6">
          
          <h2 className="text-4xl font-bold text-white text-center">Why Choose Us?</h2>
          <p className="text-center text-lg text-gray-200 mt-4">Empowering creators and delighting fans with unparalleled features.</p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <FaUsers className="mx-auto text-white w-16 h-16" />
              <h3 className="text-2xl font-semibold text-white mt-4">Direct Fan Engagement</h3>
              <p className="text-gray-200 mt-2">
                Build and nurture a loyal fanbase with personalized interactions and exclusive content.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <FaDollarSign className="mx-auto text-white w-16 h-16" />
              <h3 className="text-2xl font-semibold text-white mt-4">Monetization Tools</h3>
              <p className="text-gray-200 mt-2">
                Multiple revenue streams including subscriptions, pay-per-view, and tips to maximize your earnings.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <FaShieldAlt className="mx-auto text-white w-16 h-16" />
              <h3 className="text-2xl font-semibold text-white mt-4">Secure Platform</h3>
              <p className="text-gray-200 mt-2">
                Your content and transactions are protected with top-notch security measures.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-20">        
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-4xl text-white font-bold">About Us</h2>
            <p className="mt-6 text-gray-200">
              We are a dedicated platform designed to empower creators by providing the tools and community needed to thrive. Whether you're an artist, influencer, or content creator, our mission is to help you monetize your passion and connect with your audience on a deeper level.
            </p>
            <p className="mt-4 text-gray-200">
              Join thousands of creators who have transformed their creative journeys with our intuitive platform and robust support system.
            </p>
            <div className="mt-6 flex space-x-4">
              <span className="text-2xl text-white font-bold">10K+</span>
              <span className="text-gray-200">Creators on the platform</span>
            </div>
            <div className="mt-2 flex space-x-4">
              <span className="text-2xl text-white font-bold">$1M+</span>
              <span className="text-gray-200">Earned by creators</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/images/aboutusphone.jpg" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-white font-bold text-center">Pricing Plans</h2>
          <p className="text-center text-lg text-gray-300 mt-4">Flexible plans tailored to fit your needs.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold">Basic</h3>
              <p className="text-4xl font-bold mt-4">$9<span className="text-xl">/month</span></p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Access to basic features
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Community support
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Up to 1,000 followers
                </li>
              </ul>
              <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold">
                Choose Basic
              </button>
            </div>
            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
              <h3 className="text-2xl font-semibold mt-6">Pro</h3>
              <p className="text-4xl font-bold mt-4">$29<span className="text-xl">/month</span></p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  All Basic features
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Up to 10,000 followers
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Advanced analytics
                </li>
              </ul>
              <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold">
                Choose Pro
              </button>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold">Enterprise</h3>
              <p className="text-4xl font-bold mt-4">$99<span className="text-xl">/month</span></p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  All Pro features
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Unlimited followers
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Custom integrations
                </li>
              </ul>
              <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold">
                Choose Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl text-white font-bold">Ready to Elevate Your Creative Journey?</h2>
          <p className="mt-4 text-white text-lg">
            Join our community today and start connecting with your fans or discovering exclusive content from creators you love.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
              Sign Up as Creator
            </button>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
              Sign Up as Fan
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">What Our Users Say</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "This platform transformed my creative journey. The tools provided are top-notch and the community is incredibly supportive."
              </p>
              <div className="mt-4 flex items-center">
              <img src="/images/man.jpg" alt="John Doe" className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div className="text-left">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-gray-500">Content Creator</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "As a fan, I love having direct access to my favorite creators. The exclusive content keeps me engaged and supports their work."
              </p>
              <div className="mt-4 flex items-center">
                <img src="/images/woman.jpg" alt="Jane Smith" className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div className="text-left">
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-gray-500">Subscriber</p>
                </div>
              </div>
            </div>
            {/* Additional Testimonials can be added here */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-white font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                aria-expanded="false"
                onClick={(e) => {
                  const answer = e.currentTarget.nextElementSibling;
                  const isHidden = answer.classList.contains('hidden');
                  // Close all open answers
                  document.querySelectorAll('.faq-answer').forEach((el) => el.classList.add('hidden'));
                  // Toggle the clicked answer
                  if (isHidden) {
                    answer.classList.remove('hidden');
                  } else {
                    answer.classList.add('hidden');
                  }
                }}
              >
                <span className="text-xl font-semibold">How do I create an account?</span>
                <FaQuestionCircle className="w-6 h-6 text-indigo-600" />
              </button>
              <p className="faq-answer mt-4 text-gray-700 hidden">
                Click on the "For Creators" or "For Fans" buttons in the hero section and follow the registration steps to create your account.
              </p>
            </div>
            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                aria-expanded="false"
                onClick={(e) => {
                  const answer = e.currentTarget.nextElementSibling;
                  const isHidden = answer.classList.contains('hidden');
                  // Close all open answers
                  document.querySelectorAll('.faq-answer').forEach((el) => el.classList.add('hidden'));
                  // Toggle the clicked answer
                  if (isHidden) {
                    answer.classList.remove('hidden');
                  } else {
                    answer.classList.add('hidden');
                  }
                }}
              >
                <span className="text-xl font-semibold">What payment methods are accepted?</span>
                <FaQuestionCircle className="w-6 h-6 text-indigo-600" />
              </button>
              <p className="faq-answer mt-4 text-gray-700 hidden">
                We accept various payment methods including credit cards, PayPal, and direct bank transfers for both subscriptions and payouts to creators.
              </p>
            </div>
            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                aria-expanded="false"
                onClick={(e) => {
                  const answer = e.currentTarget.nextElementSibling;
                  const isHidden = answer.classList.contains('hidden');
                  // Close all open answers
                  document.querySelectorAll('.faq-answer').forEach((el) => el.classList.add('hidden'));
                  // Toggle the clicked answer
                  if (isHidden) {
                    answer.classList.remove('hidden');
                  } else {
                    answer.classList.add('hidden');
                  }
                }}
              >
                <span className="text-xl font-semibold">Can I upgrade or downgrade my plan?</span>
                <FaQuestionCircle className="w-6 h-6 text-indigo-600" />
              </button>
              <p className="faq-answer mt-4 text-gray-700 hidden">
                Yes, you can easily upgrade or downgrade your subscription plan from your account settings at any time without any hassle.
              </p>
            </div>
            {/* Additional FAQs can be added here */}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl text-white font-bold">Stay Updated</h2>
          <p className="mt-4 text-gray-200">
            Subscribe to our newsletter to receive the latest updates, tips, and exclusive offers.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-1/3 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
  {/*    
  {/* 
<section className="bg-gray-200 py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-gray-800">Get in Touch</h2>
    <div className="mt-12 flex flex-col md:flex-row justify-center items-start gap-12">
     
      <div className="md:w-1/2">
        <form className="space-y-6 bg-white rounded-lg p-6 shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
      
    
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
        <p className="mt-4 text-gray-600">Email: support@yourplatform.com</p>
        <p className="mt-2 text-gray-600">Phone: +1 (234) 567-8901</p>
        <p className="mt-2 text-gray-600">Address: 1234 Street Name, City, State, Country</p>
        <div className="mt-6 flex space-x-4">
          <a
            href="https://www.facebook.com/yourplatform"
            aria-label="Facebook"
            className="hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://www.twitter.com/yourplatform"
            aria-label="Twitter"
            className="hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/yourplatform"
            aria-label="Instagram"
            className="hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/yourplatform"
            aria-label="LinkedIn"
            className="hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div> 
</section>
 */}
    </div>
  );
};

// Export all used icons to prevent unused import warnings
export default LandingPage;
