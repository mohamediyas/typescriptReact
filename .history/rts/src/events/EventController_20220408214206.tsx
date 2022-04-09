import React from "react";

const EventController: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = () => {
    console.log("Iam draggable");
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Frag me!
      </div>
    </div>
  );
};

export default EventController;
