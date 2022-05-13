import React, { useContext } from "react";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./IngredientCard.css";
// import { VisualContext } from "../contexts/VisualContext";

export default function IngredientCard(props) {
  const { name, id, checkIngredientCard, setCheckIngredientCard } = props;
  // const { checkIngredientCard, setCheckIngredientCard } = useContext(
  //   VisualContext
  // );

  const handleClick = (e) => {
    console.log(e.target.getAttribute("id"));
    console.log(id);
    if (e.target.getAttribute("id") == id) {
      setCheckIngredientCard(!checkIngredientCard);
      console.log(checkIngredientCard);
    }
  };

  const styleDefault = {
    borderRadius: "15px",
    height: "5rem",
    width: "5rem",
    backgroundColor: "#464E2E",
    color: "#f2f2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: 6,
    marginTop: "0.5rem",
  };

  const styleSelected = {
    borderRadius: "15px",
    height: "5rem",
    width: "5rem",
    backgroundColor: "#B0B3B8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.5rem",
  };

  return (
    <Card
      id={id}
      onClick={handleClick}
      variant="contained"
      sx={checkIngredientCard === true ? styleDefault : styleSelected}
    >
      <CardActionArea id={id}>
        <CardContent
          id={id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            id={id}
            sx={{
              objectFit: "scale-down",
              width: 50,
              height: 50,
            }}
            component="img"
            image="https://icon-library.com/images/vegetable-icon-png/vegetable-icon-png-19.jpg"
          />

          <Typography
            id={id}
            sx={{
              fontSize: "0.7rem",
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
