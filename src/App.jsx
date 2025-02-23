import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import theme from "./theme/theme";
import AppRoutes from "./router/routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

const GradientBackground = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(to right, #2c3e50, #fd746c)",
  overflowX: "hidden",
  width: "100%",
  position: "relative",
  margin: 0,
  padding: 0,
});

const MainContent = styled(Box)({
  flex: 1,
  width: "100%",
  position: "relative",
  overflowX: "hidden",
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <GradientBackground>
          <Navbar />
          <MainContent>
            <AppRoutes />
          </MainContent>
          <Footer />
        </GradientBackground>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
