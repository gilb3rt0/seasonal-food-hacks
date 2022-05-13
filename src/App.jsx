import React from "react";
import themeGlobal from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={themeGlobal}>
      <CssBaseline />
      <div>
        <p>hello world! we are making you a better place.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
