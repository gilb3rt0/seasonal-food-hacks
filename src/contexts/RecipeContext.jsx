import React, { createContext, useState } from "react";

export const RecipeContext = createContext([]);

export function RecipeContextProvider({ children }) {
  const [recipes, setRecipes] = useState();

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
}
