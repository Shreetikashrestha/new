// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c3e50",
    },
    secondary: {
      main: "#f8a5c2",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Playfair Display", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
