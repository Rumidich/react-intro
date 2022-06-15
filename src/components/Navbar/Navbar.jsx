import React, { useState } from "react";

const Navbar = ({ cars }) => {
  const [activeCard, setActiveCard] = useState("");
  // const [activeCard, setActiveCard] = useState("");
  // console.log(cars, "carssssss");
  return (
    <div>
      {cars.map(item => {
        console.log(item, "item cars");
        return (
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
        );
      })}
      {/* {cars.map(item => {
        console.log(item, "iteeeem model");
        <strong key={item.id} style={{ color: "yellow" }}>
          {item}
        </strong>;
      })} */}
    </div>
  );
};

export default Navbar;
