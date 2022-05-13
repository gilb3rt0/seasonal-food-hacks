import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeSuggestions from "./pages/RecipeSuggestions";
import SeasonIngredients from "./pages/SeasonIngredients";
import { RecipeContextProvider } from "./contexts/RecipeContext";
import { VisualContextProvider } from "./contexts/VisualContext";

function App() {
  return (
    <Router>
      <div>
        <RecipeContextProvider>
          <VisualContextProvider>
            <Routes>
              <Route path="/" element={<SeasonIngredients />} />
              <Route path="/recipes" element={<RecipeSuggestions />} />
            </Routes>
          </VisualContextProvider>
        </RecipeContextProvider>
      </div>
    </Router>
  );
}

export default App;
