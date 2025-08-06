import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const RestaurantFooter = () => {
  return (
    <motion.footer
      className="bg-[#1c1c1c] text-white py-10 px-6 md:px-20"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand + About */}
        <motion.div
          variants={footerVariants}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-red-500">Tasty Bites</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Where every bite tells a story. Fresh ingredients, skilled hands, and flavors you'll never forget.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={footerVariants}>
          <h3 className="text-xl font-semibold mb-4 text-red-400">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">Reservations</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={footerVariants}>
          <h3 className="text-xl font-semibold mb-4 text-red-400">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Food Street, Karachi</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@tastybites.pk</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={footerVariants}>
          <h3 className="text-xl font-semibold mb-4 text-red-400">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400"
        variants={footerVariants}
      >
        © {new Date().getFullYear()} Tasty Bites. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default RestaurantFooter;
