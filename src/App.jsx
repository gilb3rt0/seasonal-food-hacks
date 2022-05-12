import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeSuggestions from "./pages/RecipeSuggestions";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/recipes" element={<RecipeSuggestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
