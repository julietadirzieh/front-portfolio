import React from "react";
import ReviewsCards from "../ReviewsCards/ReviewsCards";
import phrases from "./phrases";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReviewCardsContainer = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full px-12 my-12 pb-6">
      <Slider {...settings}>
        {phrases.map((card, index) => {
          return (
            <ReviewsCards
              key={index}
              img={card.src}
              phrase={card.phrase}
              author={card.author}
              description={card.description}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ReviewCardsContainer;
