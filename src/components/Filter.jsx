import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Filter.css";

export default function Filter() {
  return (
    <div>
      <p id="filter-text">Filter your recipes:</p>
      <Stack id="filter-container" direction="row" spacing={1}>
        <Chip
          sx={{ height: 20 }}
          className="filter-element"
          label="vegan"
          variant="outlined"
        >
          test
        </Chip>
        <Chip
          sx={{ height: 20 }}
          className="filter-element"
          label="vegetarian"
          variant="outlined"
        />
        <Chip
          sx={{ height: 20 }}
          className="filter-element"
          label="gluten-free"
          variant="outlined"
        />
        <Chip
          sx={{ height: 20 }}
          className="filter-element"
          label="dairy-free"
          variant="outlined"
        />
        <Chip
          sx={{ height: 20 }}
          className="filter-element"
          label="fish-free"
          variant="outlined"
        />
        <Chip
          sx={{ height: 20 }}
          className="filter-element"
          label="low-sugar"
          variant="outlined"
        />
      </Stack>
    </div>
  );
}
