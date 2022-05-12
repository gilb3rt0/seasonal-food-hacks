import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./RecipeCardSmall.css";

function RecipeCardSmall(props) {
  const { img, recipeTitle } = props;
  return (
    <Card id="recipe-container">
      <img id="recipe-img" src={img} alt="recipe" />
      <h5 id="recipe-title">{recipeTitle}</h5>
      {/*  <CardMedia id="recipe-img" component="img" alt="recipe" image={img} />
      <CardContent>
        <Typography
          sx={{ wordWrap: "break-word" }}
          id="recipe-title"
          gutterBottom
          component="div"
        >
          {recipeTitle}
        </Typography>
      </CardContent> */}
    </Card>
  );
}

export default RecipeCardSmall;
