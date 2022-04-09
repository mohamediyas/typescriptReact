import React, { useState, useRef, useEffect } from "react";

const users = [
  { name: "imthiyas", age: 20 },
  { name: "sharin", age: 20 },
  { name: "mohamed ", age: 20 },
];

const UserSearch: React.FC = () => {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");

  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name == name);

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
