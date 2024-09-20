import React from "react";
import {
  Moon,
  Sun,
  Calendar,
  Apple,
  Utensils,
  Droplet,
  UserPlus,
} from "lucide-react";

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-pink-500" />,
      title: "Cycle Tracking",
      description: "Log and predict your menstrual cycles with ease",
    },
    {
      icon: <UserPlus className="h-8 w-8 text-pink-500" />,
      title: "Doctor Appointments",
      description: "Schedule and manage your healthcare visits",
    },
    {
      icon: <Moon className="h-8 w-8 text-pink-500" />,
      title: "Sleep Hygiene",
      description: "Improve your sleep patterns for better health",
    },
    {
      icon: <Utensils className="h-8 w-8 text-pink-500" />,
      title: "Diet Recommendations",
      description: "Personalized nutrition advice for each phase",
    },
    {
      icon: <Apple className="h-8 w-8 text-pink-500" />,
      title: "Foods to Avoid",
      description: "Learn what to eat and what to avoid during your cycle",
    },
    {
      icon: <Droplet className="h-8 w-8 text-pink-500" />,
      title: "Blood Color Guide",
      description: "Understand what your menstrual blood color means",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-pink-800 sm:text-4xl">
            Comprehensive Cycle Care
          </h2>
          <p className="mt-4 text-xl text-pink-600">
            Everything you need for holistic menstrual health
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-pink-100 text-pink-500">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-pink-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-pink-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
