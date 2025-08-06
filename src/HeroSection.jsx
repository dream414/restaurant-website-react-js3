import { useEffect, useState } from "react";

const images = [
  "/dish1.png",
  "/dish2.png",
  "/dish3.png",
  "/dish4.png",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Image auto-slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Modal Video Player */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-5 -right-5 bg-red-500 hover:bg-red-700 text-white rounded-full w-10 h-10 text-xl flex items-center justify-center z-50"
            >
              &times;
            </button>
            <video
              src="/foodpromo.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-xl shadow-lg border-4 border-white"
            />
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-red-100 to-yellow-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 overflow-hidden">
        
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in-up">
          <h2 className="text-5xl font-extrabold text-red-600 dark:text-yellow-300 leading-tight">
            Why Choose Our Food?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Discover the taste of tradition with a modern twist. Each bite is crafted to perfection using the freshest ingredients by expert chefs.
          </p>

          {/* Button to Open Modal */}
          <div
            onClick={() => setShowVideo(true)}
            className="relative w-60 h-16 mx-auto md:mx-0 group cursor-pointer"
          >
            <video
              src="/foodpromo.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover rounded-full brightness-75 group-hover:brightness-100 transition duration-500"
            />
            <div className="relative z-10 flex items-center justify-center h-full rounded-full bg-red-600 dark:bg-red-700 hover:bg-yellow-400 backdrop-blur-md text-white font-semibold tracking-wide transition duration-300">
              Watch Promo 🍽️
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-14 md:mt-0 animate-fade-in-left">
          <img
            src={images[current]}
            alt="Dish"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-[6px] border-red-400 animate-spin-slow"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
