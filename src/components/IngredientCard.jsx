import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function IngredientCard(props) {
  const [checkIngredientCard, setCheckIngredientCard] = useState(true);
  const { name } = props;
  const handleClick = () => {
    setCheckIngredientCard(!checkIngredientCard);
    console.log(checkIngredientCard);
  };

  const styleDefault = {
    borderRadius: "15px",
    height: "100px",
    width: "100px",
    backgroundColor: "#464E2E",
    color: "#f2f2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: 6,
  };

  const styleSelected = {
    borderRadius: "15px",
    height: "100px",
    width: "100px",
    backgroundColor: "#B0B3B8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Card
      onClick={(e) => handleClick(e)}
      variant="contained"
      sx={checkIngredientCard === true ? styleDefault : styleSelected}
    >
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{
              objectFit: "scale-down",
              width: 50,
              height: 50,
            }}
            component="img"
            image="https://icon-library.com/images/vegetable-icon-png/vegetable-icon-png-19.jpg"
          />

          <Typography>{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
