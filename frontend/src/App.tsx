import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <FeatureSection />
          <CTASection />
        </main>
      </div>
    </>
  );
}

export default App;
