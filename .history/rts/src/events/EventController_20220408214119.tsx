import React from "react";

const EventController: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={ondragstart}>
        Frag me!
      </div>
    </div>
  );
};

export default EventController;
