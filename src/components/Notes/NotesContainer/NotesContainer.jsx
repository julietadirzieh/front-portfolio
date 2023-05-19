import React from "react";
import NotesCards from "../NotesCards/NotesCards";
import notes from "./notes";

const NotesContainer = () => {
  return (
    <div className="w-full md:px-12 my-16 py-4 bg-gray-light grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-5">
      {notes.map((card, index) => {
        return (
          <NotesCards
            key={index}
            src={card.src}
            title={card.title}
            icon={card.icon}
          />
        );
      })}
    </div>
  );
};

export default NotesContainer;
