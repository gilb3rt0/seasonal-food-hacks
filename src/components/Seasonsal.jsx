import React, { useState, useEffect } from "react";
import axios from "axios";
import IngredientCard from "./IngredientCard";
import { Container } from "@mui/material";

function Seasonal() {
  const [seasonal, setSeasonal] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/fruits")
      .then((response) => {
        console.log(response.data);
        const d = new Date();
        const currentMonth = d.getMonth();
        console.log(currentMonth);
        response.data.forEach((item) => {
          if (item.availability.includes(currentMonth)) {
            setSeasonal((prev) => {
              return [...prev, item];
            });
          }
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Container
        style={{
          width: "70vw",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {seasonal.map((e) => (
          <IngredientCard key={e.id} name={e.name} />
        ))}
      </Container>
    </>
  );
}

export default Seasonal;
