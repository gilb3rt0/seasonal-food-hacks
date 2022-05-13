import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./RecipeCardSmall.css";

function RecipeCardSmall(props) {
  const { img, recipeTitle, handleSelect, id } = props;
  console.log(id);
  return (
    <Card className="recipe-container" id={id}>
      {/* <img id="recipe-img" src={img} alt="recipe" />
      <h5 id="recipe-title">{recipeTitle}</h5> */}
      <CardActionArea onClick={handleSelect} id={id}>
        <CardMedia
          className="recipe-img"
          component="img"
          alt="recipe"
          image={img}
          id={id}
        />
        <CardContent id={id}>
          <Typography
            sx={{ wordWrap: "break-word" }}
            className="recipe-title"
            gutterBottom
            component="div"
            id={id}
          >
            {recipeTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RecipeCardSmall;
