import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeSuggestions from "./pages/RecipeSuggestions";
import SeasonIngredients from "./pages/SeasonIngredients";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SeasonIngredients />} />
          <Route path="/recipes" element={<RecipeSuggestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
