import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipePreview from "../components/RecipePreview";
import Filter from "../components/Filter";
import "./RecipeSuggestions.css";
import { RecipeContext } from "../contexts/RecipeContext";

function RecipeSuggestions() {
  const { recipes } = useContext(RecipeContext);
  const [selected, setSelected] = useState(recipes[0]);
  console.log(recipes);
  const navigate = useNavigate();

  const handleSelect = (e) => {
    setSelected(recipes[e.target.id]);
  };

  return (
    <div id="rec-suggestion-main-container">
      <ChevronLeftIcon
        sx={{
          color: "#212121",
          position: "absolute",
          top: "18px",
          left: "10px",
        }}
        onClick={() => navigate(`/`)}
      />
      <br />
      <Filter />
      <div id="recipe-slider">
        {recipes
          ? recipes.map((r, index) => (
              <RecipeCardSmall
                key={index}
                img={r.recipe.image}
                recipeTitle={r.recipe.label}
                handleSelect={handleSelect}
                id={index}
                className="recipe-card"
              />
            ))
          : null}
      </div>
      <Divider id="divider" />
      {selected ? (
        <RecipePreview
          img={selected.recipe.image}
          recipeTitle={selected.recipe.label}
          ingredients={selected.recipe.ingredients}
          recipeUrl={selected.recipe.url}
        />
      ) : null}
    </div>
  );
}

export default RecipeSuggestions;
