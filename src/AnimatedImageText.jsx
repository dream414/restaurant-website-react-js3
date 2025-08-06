import { motion } from "framer-motion";

const AnimatedImageText = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-10">

      {/* Left: Chef Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/chief.png"
          alt="Chef"
          className="w-80 h-80 object-cover rounded-xl shadow-2xl border-4 border-white hover:border-red-600  transition-all duration-300 transform hover:scale-105 cursor-pointer"
        />
      </motion.div>

      {/* Right: Chef Description */}
      <motion.div
        className="w-full md:w-1/2 rounded-xl shadow-2xl p-8  bg-gradient-to-r from-pink-100 via-yellow-50 to-red-100"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-red-600 mb-4">Meet Our Master Chef</h2>
        <p className=" leading-relaxed mb-3 text-lg text-gray-600">
          With over 20 years of culinary experience, our Executive Chef brings a fusion of tradition and innovation to every dish.
        </p>
        <p className=" leading-relaxed mb-3 text-lg text-gray-600">
          From handpicking the freshest ingredients to crafting recipes that ignite your senses, he is the soul of our kitchen.
        </p>
        <p className=" leading-relaxed text-lg text-rose-500">
          Passion, precision, and perfection — this is what defines his journey in the world of gourmet cuisine.
        </p>
      </motion.div>

    </div>
  );
};

export default AnimatedImageText;
