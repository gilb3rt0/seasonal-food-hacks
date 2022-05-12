import { Box, Button, Divider } from "@mui/material";
import React from "react";
import IngredientCard from "../components/IngredientCard";

export default function SeasonIngredients() {
  const selectedIngredientsBoxStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  };

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
      <Button sx={{ width: "150px", borderRadius: "20px" }} variant="contained">
        FIND RECIPES
      </Button>
      <Divider variant="middle" />
      {/* BOX FOR AVAILABLE INGREDIENTS OF THIS SEASON*/}
      <Box sx={selectedIngredientsBoxStyle}>
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
      </Box>
    </div>
  );
}
