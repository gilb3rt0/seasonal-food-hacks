import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodIcons from "./components/foodIcons";
import RecipeSuggestions from "./pages/RecipeSuggestions";
import SeasonIngredients from "./pages/SeasonIngredients";
import { RecipeContextProvider } from "./contexts/RecipeContext";
import themeGlobal from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={themeGlobal}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
