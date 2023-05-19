import React from "react";
import { motion } from "framer-motion";

const ServicesCards = ({ icon, color, title, description }) => {
  return (
    <motion.div
      whileInView={{ scale: 0.8 }}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.9 }}
      className={`scale-80 text-center p-4 flex flex-col justify-center bg-white shadow-lg shadow-gray-400 rounded-xl m-0`}
    >
      {/* <div className="text-center my-4 py-2 px-6 border border-bordo rounded-xl"> */}
      <div className="self-start align-top">
        <h2 className="font-bold text-base text-left text-black">{title}</h2>
        <p className={`text-left text-xl md:text-3xl text-${color}`}>{icon}</p>
      </div>
      <div className="align-middle items-center my-auto">
        <p
          className={`hidden md:block lg:px-2 text-center text-4xl md:text-6xl text-${color}`}
        >
          {icon}
        </p>
        <h3 className="leading-5 my-3 px-4 text-base text-black">
          {description}
        </h3>
        {/*       <p className="text-xs">{phrase}</p> */}
        <p
          className={`hidden md:block px-2 text-center text-4xl md:text-6xl text-${color}`}
        >
          {icon}
        </p>
      </div>
      <div className="self-end align-bottom">
        <p className={`rotate-180 text-left text-xl md:text-3xl text-${color}`}>
          {icon}
        </p>
        <h2 className="rotate-180 font-bold text-base text-left text-black">
          {title}
        </h2>
      </div>
      {/*         </div> */}
    </motion.div>
  );
};

export default ServicesCards;
