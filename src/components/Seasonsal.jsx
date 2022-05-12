import React, { useState, useEffect } from "react";
import axios from "axios";

function Seasonal() {
  const [spring, setSpring] = useState([]);
  const summer = [];
  const autumn = [];
  const winter = [];

  useEffect(() => {
    axios
      .get("http://localhost:3002/fruits")
      .then((response) => {
        console.log(response.data);
        response.data.forEach((item) => {
          if (
            item.availability.includes("mar") ||
            item.availability.includes("apr") ||
            item.availability.includes("jun")
          ) {
            console.log(item);
            setSpring((prev) => {
              return [...prev, item];
            });
            console.log(spring);
          }
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {spring.map((e) => (
        <p key={e.id}>{e.name}</p>
      ))}
    </div>
  );
}

export default Seasonal;
