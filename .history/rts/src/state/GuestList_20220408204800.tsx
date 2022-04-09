import { useState } from "react";

// if you need interface  you will add next .FC
const GuestList: React.FC = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Add Guest</button>
    </div>
  );
};

export default GuestList;
