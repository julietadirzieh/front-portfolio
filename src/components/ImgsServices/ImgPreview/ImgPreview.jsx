import { useEffect } from "react";
import { Image } from "cloudinary-react";

const ImgPreview = ({
  currentImage,
  handlePrevImage,
  handleNextImage,
  handleCloseModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePrevClick = (event) => {
    event.stopPropagation();
    handlePrevImage();
  };

  const handleNextClick = (event) => {
    event.stopPropagation();
    handleNextImage();
  };

  return (
    <div className="relative h-full">
      <button
        className="absolute top-10 right-10 transform -translate-y-full translate-x-full bg-bordo opacity-70 rounded-full w-8 h-8 flex justify-center items-center text-white text-xl hover:opacity-100 transition-opacity"
        onClick={handleCloseModal}
      >
        X
      </button>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-bordo opacity-70 rounded-full w-8 h-8 flex justify-center items-center text-white text-xl hover:opacity-100 transition-opacity"
        onClick={handlePrevClick}
      >
        &#8249;
      </button>
      <Image
        alt={currentImage.caption}
        cloudName="dno4arq1n"
        publicId={currentImage.src}
        className="max-h-full max-w-full rounded-xl"
      />
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-bordo opacity-70 rounded-full w-8 h-8 flex justify-center items-center text-white text-xl hover:opacity-100 transition-opacity"
        onClick={handleNextClick}
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImgPreview;
