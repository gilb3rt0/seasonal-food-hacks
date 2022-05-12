import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./RecipePreview.css";

function RecipePreview(props) {
  const { img, recipeTitle, ingredients, recipeUrl } = props;

  return (
    <div id="main-recipe-container">
      <div id="img-container">
        {" "}
        <img id="recipe-preview-img" src={img} />
      </div>

      <h3 id="recipe-preview-title">{recipeTitle}</h3>
      <div id="ingredients-container">
        <ul id="ingredients-list">
          <li className="ingredients-items">
            Here: map through ingredients array elements
          </li>
        </ul>
        <a
          id="link-recipe"
          href={`https://www.justtherecipe.com/?url=${recipeUrl}`}
        >
          <div id="btn-container">
            <Button id="recipe-btn" variant="contained">
              Go to recipe
            </Button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default RecipePreview;
