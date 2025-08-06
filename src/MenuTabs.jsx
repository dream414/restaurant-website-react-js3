import { useState } from "react";

const tabData = [
  {
    name: "Pizza",
    images: ["/pizza1.png", "/pizza2.png"],
  },
  {
    name: "Burger",
    images: ["/burger1.png", "/burger2.png"],
  },
  {
    name: "Pasta",
    images: ["/pasta1.png", "/pasta2.png"],
  },
  {
    name: "Biryani",
    images: ["/biryani1.png", "/biryani2.png"],
  },
  {
    name: "Dessert",
    images: ["/dessert1.png", "/dessert2.png"],
  },
];

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-r from-pink-100 via-yellow-50 to-red-100 transition-all duration-500">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-red-700 mb-12 animate-fadeInDown tracking-wide shadow-md">
     Our Menu
      </h2>

      {/* Main Flex Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
        {/* Left Tabs */}
        <div className="flex md:flex-col gap-4 w-full md:w-1/4">
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-full text-left  cursor-pointer px-4 py-3 rounded-lg border text-sm md:text-base font-medium transition-all duration-300 shadow ${
                activeTab === index
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-red-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Right Images */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeInDown">
          {tabData[activeTab].images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Dish ${i}`}
              className=" cursor-pointer w-full h-80 object-contain rounded-xl shadow-xl border-4 border-red-300 hover:scale-105 transition-transform duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuTabs;
