import React from "react";

const NotesCards = ({ src, title, icon }) => {
  return (
    <div className="w-full text-center md:text-justify mx-auto mr-4 py-2 px-6 items-center justify-center my-auto">
      <h2 className="text-xs mb-2">{title}</h2>
      <div className="text-bordo text-sm flex items-center">
        {icon === "newspaper" ? (
          <div className="mx-auto md:mx-0 flex items-center">
            <img
              src="/icons/newspaper.svg"
              alt="newspaper icon"
              className="pr-2 h-6"
            />
            <a href={src} target="_blank" aria-label="Leer más">
              Leer Más
            </a>
          </div>
        ) : (
          <div className="mx-auto md:mx-0 flex items-center">
            <img
              src="/icons/video.svg"
              alt="newspaper icon"
              className="pr-2 h-6"
            />
            <a href={src} target="_blank" aria-label="Ver más">
              Ver Más
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesCards;
