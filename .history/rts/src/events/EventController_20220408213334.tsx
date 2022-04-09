import React from "react";

const EventController: React.FC = () => {
  return (
    <div>
      <input onChange={(e) => console.log(e)} />
    </div>
  );
};

export default EventController;
