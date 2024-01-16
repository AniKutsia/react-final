import React from 'react';
import game from '../img/aa.png';
import dragon from '../img/dragon.png';
import wolf from '../img/wolf.png';

function About() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      {/* Header Section */}
      <header className="py-6 flex justify-center items-center">
        {/* Game of Thrones Logo */}
        <img src={game} alt="Game of Thrones Logo" className="h-16 animate-bounce" />
      </header>

      {/* Introduction Section */}
      <section className="text-center mt-16">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">Welcome to the Game of Thrones Universe</h1>
        <p className="text-lg">
          Game of Thrones is a fantasy television series based on the "A Song of Ice and Fire" novels by George R.R. Martin. Set in the fictional continents of Westeros and Essos, the series explores the power struggles among noble families as they vie for control of the Iron Throne and the Seven Kingdoms.
        </p>
        <p className="text-lg mt-4">
          Filled with political intrigue, epic battles, and mythical creatures, Game of Thrones captivated audiences worldwide during its run from 2011 to 2019. The show features a vast ensemble cast of characters, each with their own complex stories and motivations.
        </p>
      </section>

      {/* Character Showcase */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Key Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Character Cards */}
          {/* Example Card (Repeat for each character) */}
          <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
            <img src={dragon} alt="Character" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">Daenerys Targaryen</h3>
            <p className="text-gray-300">The Mother of Dragons, determined to reclaim the Iron Throne.</p>
          </div>
          {/* Add more character cards here */}
        </div>
      </section>

      {/* House Histories */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Great Houses of Westeros</h2>
        {/* House Banners */}
        <div className="flex justify-around mb-8">
          {/* Example Banner (Repeat for each house) */}
          <img src={wolf} alt="House Banner" className="h-16 object-contain" />
          {/* Add more house banners here */}
        </div>

        {/* House Pages (Repeat for each house) */}
        <div className="flex flex-wrap justify-around">
          <div className="bg-gray-800 text-white px-6 py-3 rounded-full mb-4">House Stark</div>
          {/* Add more house pages here */}
        </div>
      </section>

      {/* Episode Guide */}
      {/* (Implement Episode Timeline and Detailed Pages as specified) */}

      {/* Contact Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Contact Us</h2>
        {/* Contact Form and Social Media Links */}
        {/* (Implement the contact form and social media links as specified) */}
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 mt-16 text-center">
        <div className="container mx-auto">
          <p className="text-sm">&copy; 2024 Game of Thrones. All rights reserved. Disclaimer: This is a fan-made website.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
