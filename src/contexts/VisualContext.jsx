import React, { createContext, useState } from "react";

export const VisualContext = createContext([]);

export function VisualContextProvider({ children }) {
  const [checkIngredientCard, setCheckIngredientCard] = useState(true);

  return (
    <VisualContext.Provider
      value={{ checkIngredientCard, setCheckIngredientCard }}
    >
      {children}
    </VisualContext.Provider>
  );
}
