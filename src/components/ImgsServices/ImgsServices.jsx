import React, { useEffect, useState } from "react";

import ImgPreview from "./ImgPreview/ImgPreview";
import Modal from "../Modal/Modal";
import images from "./images";

const ImgsServices = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImage(null);
    setModalOpen(false);
  };

  const handleNextImage = () => {
    const currentIndex = images.findIndex(
      (image) => image.id === currentImage.id
    );
    if (currentIndex < images.length - 1) {
      setCurrentImage(images[currentIndex + 1]);
    }
  };

  const handlePrevImage = () => {
    const currentIndex = images.findIndex(
      (image) => image.id === currentImage.id
    );
    if (currentIndex > 0) {
      setCurrentImage(images[currentIndex - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNextImage();
      } else if (event.key === "ArrowLeft") {
        handlePrevImage();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImage]);

  useEffect(() => {
    const handleTouchStart = (event) => {
      const startX = event.touches[0].clientX;
      const handleTouchMove = (event) => {
        const endX = event.touches[0].clientX;
        const deltaX = endX - startX;
        if (deltaX > 50) {
          handlePrevImage();
        } else if (deltaX < -50) {
          handleNextImage();
        }
      };
      document.addEventListener("touchmove", handleTouchMove);
      return () => {
        document.removeEventListener("touchmove", handleTouchMove);
      };
    };
    document.addEventListener("touchstart", handleTouchStart);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [currentImage]);
  return (
    <>
      <div className="grid grid-cols-4 mx-auto">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.caption}
            className="w-full object-cover p-2 rounded-xl pb-12"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <ImgPreview
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
          handleCloseModal={handleCloseModal}
          currentImage={currentImage}
        />
      </Modal>
    </>
  );
};

export default ImgsServices;
