import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeSuggestions from "./pages/RecipeSuggestions";
import SeasonIngredients from "./pages/SeasonIngredients";
import { RecipeContextProvider } from "./contexts/RecipeContext";

function App() {
  return (
    <Router>
      <div>
        <RecipeContextProvider>
          <Routes>
            <Route path="/" element={<SeasonIngredients />} />
            <Route path="/recipes" element={<RecipeSuggestions />} />
          </Routes>
        </RecipeContextProvider>
      </div>
    </Router>
  );
}

export default App;
