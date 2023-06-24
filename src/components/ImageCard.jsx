import React from 'react';

const ImageCard = ({ imageSrc, title, location }) => {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-4 flex flex-col justify-center items-center">
      <div className="flex justify-center px-9">
        <img src={imageSrc} alt="Card" className="w-80 h-80 object-cover" />
      </div>
      <div className="text-center mt-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{location}</p>
      </div>
    </div>
    </>
  );
};

const ImageCardList = () => {
  const imageCards = [
    {
      id: 1,
      imageSrc: 'Images/Aurobindo_Residency 1.png',
      title: 'Card 1',
      location: 'Lorem',
    },
    {
      id: 2,
      imageSrc: 'Images/Aurobindo_Residency 1.png',
      title: 'Card 2',
      location: 'bbsr',
    },
    {
      id: 3,
      imageSrc: 'Images/Aurobindo_Residency 1.png',
      title: 'Card 3',
      location: 'cuttack',
    },
  ];

  return (
    <>
    <div className="bg-gray-200 p-4">
    <h3 className='text-center text-2xl font-bold mb-4 text-rose-700'>OUR PROJECTS</h3>

      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2 ">
          {imageCards.map((card) => (
            <div key={card.id}>
              <ImageCard
                imageSrc={card.imageSrc}
                title={card.title}
                location={card.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ImageCardList;
