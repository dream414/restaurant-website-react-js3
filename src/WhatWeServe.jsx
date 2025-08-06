import React, { useEffect } from "react";

// ✅ Scroll animation with AOS
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    img: "/delieveryboy.png",
    title: "One Top Ordering",
    desc: "Order from anywhere in seconds — simple and smooth experience.",
  },
  {
    img: "/onlineorder.png",
    title: "Flash Speed Delivery",
    desc: "Get your food fast, hot, and fresh at your doorstep.",
  },
  {
    img: "/waiter.png",
    title: "Five Star Quality",
    desc: "Every meal is crafted with premium ingredients and love.",
  },
];

const WhatWeServe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full  py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔴 Headings */}
        <h2 className="text-red-600 text-lg font-semibold mb-2 uppercase tracking-widest" data-aos="fade-up">
          What We Serve
        </h2>

        <h1 className="text-4xl md:text-5xl font-bold mb-2" data-aos="fade-up">
          Delicious Delivered
        </h1>

        <h1 className="text-2xl md:text-3xl font-medium text-gray-600 mb-12" data-aos="fade-up">
          Just the way You Love
        </h1>

        {/* 🟢 Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-40 h-40 mx-auto mb-4 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-xl font-semibold mb-2 text-red-500">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeServe;
