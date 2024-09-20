import React from "react";
import { Button } from "./ui/button";

const HeroSection: React.FC = () => (
  <div className="text-center py-72 bg-gradient-to-r from-pink-100 to-pink-200">
    <h1 className="text-5xl font-bold mb-4 text-pink-800">
      Embrace Your Cycle
    </h1>
    <p className="text-xl mb-8 text-pink-600">
      Comprehensive menstrual health tracking and support
    </p>
    <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-lg">
      Start Tracking
    </Button>
  </div>
);

export default HeroSection;
