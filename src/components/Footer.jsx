import React from 'react';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import ContactUs from './ContactUs';
import ImageCardList from './ImageCard';
import AboutPage from './AboutUs';
import Header from './Header';

const Footer = () => {
  return (
    <>
    <Header />
    <AboutPage />
    <ImageCardList />
    <footer className="bg-[#FFD8E3] flex flex-col md:flex-row justify-evenly px-8 md:px-20 py-8 text-[#37211E]">
      <div className="md:w-1/4">
        <img src="LOGO (1).png" width="258px" height="61px" className="" alt="" />
        <p className="text-base leading-normal py-6">
          Thank you for visiting vittibhumi. We are here to help you with all your real estate needs. Contact us today to
          learn more about our services and how we can assist you in achieving your real estate goals.
        </p>
      </div>

      <div className="md:w-1/4">
        <h3 className="font-medium text-lg">Navigation</h3>
        <ul className="py-4 text-base space-y-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Project</li>
          <li>Gallery</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="md:w-1/4">
        <ul className="flex">
          <li className="text-3xl px-2 text-[#25D366]">
            <IoLogoWhatsapp />
          </li>
          <li className="text-3xl px-2 text-[#E4405F]">
            <IoLogoInstagram />
          </li>
          <li className="text-3xl px-2 text-[#3b5998]">
            <IoLogoFacebook />
          </li>
          <li className="text-3xl px-2 text-[#3b5998]">
            <GrMail />
          </li>
        </ul>
      </div>
    </footer>
    </>
  );
};

export default Footer;
