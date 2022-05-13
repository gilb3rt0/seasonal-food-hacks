import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./IngredientCard.css";
import FoodIconList from "./foodIconList";
// import * as props from '../assets/images/food-icons'
export default function IngredientCard(props) {
  const [checkIngredientCard, setCheckIngredientCard] = useState(true);
  const { name, id } = props;

  const handleClick = () => {
    setCheckIngredientCard(!checkIngredientCard);
    console.log(checkIngredientCard);
  };
  const iconArr = [];
  for (const icon in FoodIconList) {
    iconArr.push(icon);
  }
  // const SvgList = FoodIconList.map((icon, n) => {
  //   console.log(icon = props.name, n)
  // })
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
  console.log(FoodIconList);
  const test = Object.keys(FoodIconList).find(
    (key) => FoodIconList.key == name
  );
  console.log(test);
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
            <div onClick={handleClick} id={id}>
            {React.createElement(FoodIconList[name],  null)}
            </div>

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
