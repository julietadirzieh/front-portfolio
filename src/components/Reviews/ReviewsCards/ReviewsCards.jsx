import { Image } from "cloudinary-react";
import React from "react";

const ReviewsCards = ({ img, phrase, author, description }) => {
  return (
    <div className="text-center mr-4 py-2 px-6 items-center justify-center">
      <Image
        src={img}
        cloudName="dno4arq1n"
        className="grayscale hover:grayscale-0 aspect-square object-cover rounded-full mx-auto"
        alt="artista"
        width="150px"
        height="150px"
      />
      <h3 className="font-bold italic-font leading-7 my-3 px-2 text-base">
        "{phrase}"
      </h3>
      <h2 className="font-bold text-lg text-bordo">{author}</h2>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default ReviewsCards;
