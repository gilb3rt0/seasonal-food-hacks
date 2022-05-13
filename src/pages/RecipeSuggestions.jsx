import React from "react";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipePreview from "../components/RecipePreview";
import Filter from "../components/Filter";
import "./RecipeSuggestions.css";

function RecipeSuggestions() {
  const navigate = useNavigate();
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
      {/* Map through recipes, below is just an example */}
      <div id="recipe-slider">
        <RecipeCardSmall
          className="recipe-card"
          img={
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
          }
          recipeTitle={"Recipe Title"}
        />
        <RecipeCardSmall
          className="recipe-card"
          img={
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
          }
          recipeTitle={"Recipe Title"}
        />
        <RecipeCardSmall
          className="recipe-card"
          img={
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
          }
          recipeTitle={"Recipe Title"}
        />
        <RecipeCardSmall
          id="recipe-card"
          img={
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
          }
          recipeTitle={"Recipe Title"}
        />
        <RecipeCardSmall
          className="recipe-card"
          img={
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
          }
          recipeTitle={"Recipe Title"}
        />
        <RecipeCardSmall
          className="recipe-card"
          img={
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
          }
          recipeTitle={"Recipe Title"}
        />
      </div>
      <Divider id="divider" />
      <RecipePreview
        img={
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
        }
        recipeTitle={"Test test test"}
        ingredients={"test test test test"}
      />
    </div>
  );
}

export default RecipeSuggestions;
