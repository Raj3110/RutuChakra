import React from "react";
import { Button } from "./ui/button";

const CTASection: React.FC = () => (
  <div className="bg-pink-100 py-16">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-pink-800 mb-4">
        Ready to Take Control of Your Cycle?
      </h2>
      <p className="text-xl text-pink-600 mb-8">
        Join RutuChakra today and start your journey to better menstrual health.
      </p>
      <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg">
        Sign Up Now
      </Button>
    </div>
  </div>
);

export default CTASection;
