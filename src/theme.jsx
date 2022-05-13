import { createTheme } from "@mui/material/styles";
import "@fontsource/khula";

const themeGlobal = createTheme({
  palette: {
    primary: {
      main: "#384125",
      contrastText: "#E9E5D6",
    },
    secondary: {
      main: "#ACB992",
    },
    error: {
      main: "#C72C41" /* To Do: Test where error color appears then change accordingly */,
    },
    background: {
      default: "#231904",
      secondary: "#120D02",
      third: "#424242",
    },
    text: {
      primary: "#E9E5D6",
      secondary: "#BDC1C5",
      third: "#0000" /* To Do: Find suitable shade of black */,
    },
  },
  typography: {
    fontFamily: ["Kuhla"].join(","),
  },
});

export default themeGlobal;
