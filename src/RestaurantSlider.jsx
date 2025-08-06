import { useEffect, useState } from "react";

// ✅ Image list (place in /public folder)
const images = [
  "/ice2.jpg",
  "/plate.jpg",
  "/brost.jpg",
  "/soup.jpg",
  "/tea.jpg",
  "/sphti.jpg",
  "/plat2.jpg",
  "/ice3.jpg",
  "/burg.jpg",
  "/coffe.jpg",
];

const RestaurantSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      {/* Slider */}
      <div className="relative w-full h-72 md:h-[28rem] overflow-hidden rounded-xl flex items-center justify-center">
        <img
          key={current}
          src={images[current]}
          alt={`Dish ${current + 1}`}
          className="w-full h-full object-contain rounded-xl shadow-2xl animate-zoom-in"
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-red-600 scale-125" : "bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantSlider;
