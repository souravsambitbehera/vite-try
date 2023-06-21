import React from 'react';

const Header = () => {
  return (
    <header className="relative">
      <img
        src="/public/aboutImage.png"
        alt="Background Image"
        className="w-full h-screen object-cover "
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About Us
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
      <nav className="absolute top-0 left-0 w-full">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div>
            <img src="/path/to/your/logo.png" alt="Logo" className="w-16 h-auto" />
          </div>
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
