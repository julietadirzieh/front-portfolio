import { motion } from "framer-motion";
import React from "react";

const Phrases = ({ id, text }) => {
  return (
    <div id={id} className="bg-gray-dark py-4 md:py-8 px-8 text-center">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 4,
        }}
        className="text-white italic-font text-lg lg:flex lg:justify-center items-center"
      >
        {text} -<p className="text-white text-sm lg:pl-1"> Bryan de Lucas</p>
      </motion.span>
    </div>
  );
};

export default Phrases;
