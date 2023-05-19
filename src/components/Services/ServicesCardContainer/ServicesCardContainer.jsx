import React from "react";
import ServicesCards from "../ServicesCard/ServicesCard";
import services from "./services";

const ServicesCardContainer = () => {
  return (
    <div className="w-full px-auto md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-2 justify-content-center">
      {services?.map((card, index) => {
        return (
          <ServicesCards
            key={index}
            title={card.title}
            description={card.description}
            phrase={card.phrase}
            icon={card.icon}
            color={card.color}
          />
        );
      })}
    </div>
  );
};

export default ServicesCardContainer;
