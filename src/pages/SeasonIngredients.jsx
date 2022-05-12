import { Box, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import IngredientCard from "../components/IngredientCard";
import Seasonal from "../components/Seasonsal";
import { ConstructionOutlined } from "@mui/icons-material";

export default function SeasonIngredients() {
  const selectedIngredientsBoxStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  };

  const [recipes, setRecipes] = useState();
  const [recipesLoaded, setRecipesLoaded] = useState(false);

  // just for testing
  const searchTerm = "potatoes";

  const handleClick = () => {
    axios
      .get(
        `https://edamam-recipe-search.p.rapidapi.com/search?q=${searchTerm}`,
        {
          /* headers: {
            "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
            "X-RapidAPI-Key":
              To Do: store in env. variable,
          }, */
        }
      )
      .then((response) => {
        setRecipes(response.data.hits);
        setRecipesLoaded(true);
      });
  };

  console.log(recipes, recipesLoaded);

  // To Do: Build the context to store recipe results

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* BOX FOR SELECTED INGREDIENTS */}
      <Box sx={selectedIngredientsBoxStyle}>
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
      </Box>
      <Button
        onClick={handleClick}
        sx={{ width: "150px", borderRadius: "20px" }}
        variant="contained"
      >
        FIND RECIPES
      </Button>
      <Divider variant="middle" />
      {/* BOX FOR AVAILABLE INGREDIENTS OF THIS SEASON*/}
      <Box sx={selectedIngredientsBoxStyle}>
        <Seasonal />
      </Box>
    </div>
  );
}
