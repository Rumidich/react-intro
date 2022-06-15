import React, { useState } from "react";

const Navbar = ({ cars }) => {
  // console.log(cars);
  const [activeCard, setActiveCard] = useState("");
  return (
    <div>
      {cars.map(item => (
        <strong
          onClick={() => setActiveCard(item.id)}
          key={item.id}
          style={{
            margin: "10px",
            color: activeCard === item.id ? "black" : "grey",
            cursor: "pointer",
          }}>
          {item.model}
        </strong>
      ))}
    </div>
  );
};

export default Navbar;
