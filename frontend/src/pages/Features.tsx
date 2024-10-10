import React from 'react';
import Navbar from "../components/Navbar.tsx";

const features = [
  { title: 'Yoga', imageSrc: 'https://s3-alpha-sig.figma.com/img/eb6a/a8be/8d6c2179d54909cd9c3d4c9f0f4770d8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwqzzO6tL4VFQitLrb1TM3fFIli3TfiLXiyyl~OfhMAHCadblv4jRuur6uRDKGs1ohWSEI8678HoX7Mmpyh-QrcZx2ucvwxxkBabqDbcXaElV5GilKhFZRzlH6qOOqpR4NhclRt8nq1hmpbsaOzhpvLudARvqCPXjrfniN7nQGQpLGEiMWRWjbXV-MQc8m4~Cn77oHW2D1dEvDYE030Dm-k4XorB7JlZ5hAbsiNWT6aYZ0USPdnZuwG-3-7TVtzGSjPhaqOXGLpckJRaHjNTSJUJ5uvlV2FX0p9isitSRS1iblLwTjVL5sqoIIrYGFYQkV~GNErLI3jmC4oIlRoAjg__' },
  { title: 'Symptoms', imageSrc: 'https://s3-alpha-sig.figma.com/img/5a52/4c7d/cb6de8b4cc6a46744a485abacf4cf11a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eN~bqqksc6jyMdJ-8J4nUUYUAvli06nzOODb2tjHgeumK7rS3EaM4yrvRhHKHuZ95M4BCqKK92l3QXAMXTtl-10GKgjSXjuMlceLhMeQbqnFLObckIzYvxUFDu4ewFJLzQBntchC0QN3nBc-pG4s6IYZElV~wD97q4u3E7oYFYuNoB-tmkUVFwU-iQSIQ5nv-o54a6Ntw2ssIYCwLPDtVk1kju91GyW8I1vM0ew7FXOgAzfnuQOXPwRYgzzlTyVeW72vaYBWuRKmn8W3namXIL-QscQt-hcknHLdleJXzH6-PLAQNHbduo310jVYR0eo~dtrSbLa0ro-7S7YRcTDFQ__' },
  { title: 'Diet', imageSrc: 'https://s3-alpha-sig.figma.com/img/7b8f/5e6e/1323b8add45d248dce6bc10a12c713de?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ml7xtuUJ9HuIXiEjAhfhlKkxx8lrufVqfWqyb2MyY7Znvx8WoJ6EkKnHPiIhEIQ0Cu-OBXREsQlREmQQ1yE7iU69ky8zr-L-nQHjiYdQ7JzTJm2mSbfMPZJE6bhDAsdWx0EMaZUP8jQgEfdWOGOZinscA19FGJPK8A8je39DYrP-qQ8BXyr4IdprAg1TgNpwPdnHzawd0cQziAwSG2ZoEkbM1xAk7WJTuJKV8OcA9wJA6GHNhbelfvBapMNXyq4GGtE1dmcWpkCEm-huO6mPEjhFOX5BygphZ1bZNREeYDMuPOUI7fyc2gcdzhlAF~2TYMrB2Euc0XkOqJ7LP1m7KA__' },
  { title: 'Tracker', imageSrc: 'https://s3-alpha-sig.figma.com/img/4840/c9e1/5b0e4f5aac66f2a78a3fec49b07cb52d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jS2WY9zSUI4mELIN3DANLixm3qhUIGQhLua90PpBIA1KLNHkIgeoUj2aW57nI4x0cC7NMpOFoRvOfv1a9cKY5fgFc3jWP1AJG6BW4OQSeFVGlpJwy2ImfTKT4FFobelHhAg37pSNA~H8PBSwjt~WkLBZn3D1AMXtlAW~rKggt~CbD-ArtSdAXwtD1ofINi3XnTlGd2u146gb-DJZ-bPmpZbJBhYAncV-lnH85l1z2ZMj2CNeWap0w7xLuDIQpsYpwAFrPMToAJcuQHoc8AKUt8DfLlpsG~1x9-Ryrd5EYUKoR6wkyjFCQBOcTjvDjmIV9DYH0bhSDkEP8xODHgI0cw__' },
  { title: 'Location Nav', imageSrc: 'https://www.figma.com/file/dKXRxfMwH7pKWLD20fzYQv/image/4e47e62349d170f9c1c476e0f803e65054500ec2' },
];

const FeatureCard = ({ title, imageSrc }) => (
  <div className="group flex flex-col h-full bg-pink-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer">
    <h3 className="text-center py-2 bg-pink-100 font-semibold group-hover:bg-pink-300 transition-colors duration-300">{title}</h3>
    <div className="flex-grow relative">
      <div className="absolute inset-0 bg-pink-700 opacity-50"></div>
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);

const MenstrualAppFeatures = () => (
  <div className="p-8">
    <h2 className="text-center italic text-2xl mb-8 text-black">
      "Your Cycle, Your Health, Your Way"
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </div>
);

const Features: React.FC = () => {

  return (
    <div className="bg-[#FF8FAB] min-h-screen">
      {/* Blob background */}
      <div className="bg-ping-100 absolute top-0 left-0 w-full h-full">
                <svg viewBox="0 0 1000 950" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
                    <path fill="#FFD8EB" d="
                    M0 0
                    H1000
                    V800
                    C750 800, 500 1000, 250 900
                    C100 850, 0 700, 0 500
                    Z"
                    />
                </svg>
            </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar item="Features"/>
        <MenstrualAppFeatures/>
      </div>
    </div>
  );
};

export default Features;