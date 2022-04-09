import { useState } from "react";

// if you need interface  you will add next .FC
const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [quest, setQuest] = useState<string[]>([]);

  const onClick = () => {
    setQuest([...quest, name]);
    setName("");
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
