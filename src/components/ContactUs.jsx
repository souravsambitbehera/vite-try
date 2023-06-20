import React from 'react';
import { AiFillPhone, AiOutlineMail, AiFillHome } from 'react-icons/ai';

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-gray-100 md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="flex items-center mb-4">
          <AiFillHome className="text-2xl mr-2" />
          <p>123 Street, City, Country</p>
        </div>
        <div className="flex items-center mb-4">
          <AiFillPhone className="text-2xl mr-2" />
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="flex items-center mb-4">
          <AiOutlineMail className="text-2xl mr-2" />
          <p>Email: example@example.com</p>
        </div>
      </div>
      <div className="bg-gray-200 md:w-1/2 p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="message"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
