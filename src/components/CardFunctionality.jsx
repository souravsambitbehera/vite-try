import React from 'react';
import Slider from 'react-slick';
import {BsArrowLeft,BsArrowRight} from "react-icons/bs"
import style from "./CartFunctionality.css"

const ImageCard = ({ imageSrc, title, location }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-4 flex flex-col justify-center items-center">
      <div className="flex justify-center px-9">
        <img src={imageSrc} alt="Card" className="w-80 h-80 object-cover" />
      </div>
      <div className="text-center mt-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{location}</p>
      </div>
    </div>
  );
};

const CardFunctionality = () => {
  const imageCards = [
    {
      id: 1,
      imageSrc: '/Images/Aurobindo_Residency 1.png',
      title: 'Card 1',
      location: 'Lorem',
    },
    {
      id: 2,
      imageSrc: '/Images/Aurobindo_Residency 1.png',
      title: 'Card 2',
      location: 'bbsr',
    },
    {
      id: 3,
      imageSrc: '/Images/Aurobindo_Residency 1.png',
      title: 'Card 3',
      location: 'cuttack',
    },
    {
        id: 4,
      imageSrc: '/Images/Aurobindo_Residency 1.png',
      title: 'Card 4',
      location: 'cuttack',
    },
    {
        id: 5,
      imageSrc: '/Images/Aurobindo_Residency 1.png',
      title: 'Card 5',
      location: 'cuttack',
    }
    // Add more imageCards as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
     prevArrow: <BsArrowLeft className="slick-arrow slick-prev" />,
    nextArrow: <BsArrowRight className="slick-arrow slick-next" />,
  };

  return (
    <div className="bg-gray-200 p-4">
      <h3 className="text-center text-2xl font-bold mb-4 text-rose-700">OUR PROJECTS</h3>
      <Slider {...sliderSettings}>
        {imageCards.map((card) => (
          <div key={card.id}>
            <ImageCard
              imageSrc={card.imageSrc}
              title={card.title}
              location={card.location}
            />
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default CardFunctionality;
