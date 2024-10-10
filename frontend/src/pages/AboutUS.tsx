import React from 'react';
import Navbar from "../components/Navbar.tsx";

const CoreValue = ({ value }) => (
  <li className="mb-2 text-pink-800">{value}</li>
);


const YogaLandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-pink-100">
      <div className="flex-1 pl-24 flex flex-col justify-center">
        <div className="max-w-md">
          <span className="inline-block bg-white text-gray-800 text-sm font-semibold py-1 rounded-full mb-4">
            Yoga
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Inner Peace
          </h1>
          <p className="text-gray-600 mb-6">
            Improve your physical and mental well-being. Join our Community
          </p>
          <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
            Book Your class →
          </button>
        </div>
      </div>

      <div className="flex-1 relative">
        <img
          src="https://wallpaperaccess.com/full/1347302.jpg"
          alt="Woman doing yoga pose"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

const AboutUS = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-pink-50 to-pink-100 min-h-screen p-8">
      <Navbar items={"About US"}/>
      <div className="max-w-6xl mx-auto mt-20">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-pink-800 mb-6">Empowering Menstrual Health</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-xl italic text-pink-700">
              "Our vision is to break the silence and inspire open conversations about menstruation, turning a taboo into empowerment."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Vision</h2>
            <p className="text-pink-800">
              To help women feel confident, informed, and supported in their
              menstrual and reproductive health journey.
            </p>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Mission</h2>
            <p className="text-pink-800">
              We aim to simplify menstrual health for women of all ages, offering
              personalized tracking and wellness insights for every life stage.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Core Values</h2>
            <ul className="list-disc pl-5">
              <CoreValue value="Empowerment" />
              <CoreValue value="Inclusivity" />
              <CoreValue value="Accuracy" />
              <CoreValue value="Privacy" />
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-pink-700">Our Commitment to Diversity</h2>
          <p className="text-pink-800 max-w-2xl mx-auto">
            We celebrate the diversity of all women and their experiences. Our platform is designed to be inclusive and supportive of every individual's unique journey through menstrual health.
          </p>
        </div>
      </div>
    </div>
    <YogaLandingPage/>
    </>
  );
};

export default AboutUS;