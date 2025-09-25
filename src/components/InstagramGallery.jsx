import React from 'react';

const cards = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1758809127581-4183a23f81ec?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0',
    title: 'Sunset Magic',
    description: 'Capturing the golden hour in all its glory.',
    link: 'https://unsplash.com/photos/YfB5jrXMBdc',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0',
    title: 'Tech Vibes',
    description: 'Photography meets technology in this frame.',
    link: 'https://unsplash.com/photos/1',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1602524812765-3b9e3df8b4a8?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0',
    title: 'Nature Escape',
    description: 'A peaceful moment captured in the wild.',
    link: 'https://unsplash.com/photos/2',
  },
];

function CardGallery() {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#f1b621]">
        Featured Photography
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardGallery;
