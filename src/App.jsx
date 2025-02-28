// // import React from "react";
// // import { BrowserRouter } from "react-router-dom";
// // import { ThemeProvider, CssBaseline, Box } from "@mui/material";
// // import { styled } from "@mui/material/styles";

// // import theme from "./theme/theme";
// // import AppRoutes from "./router/routes";
// // import Navbar from "./components/navbar/Navbar";
// // import Footer from "./components/footer/Footer";
// // import { ToastContainer } from "react-toastify";

// // const GradientBackground = styled(Box)({
// //   minHeight: "100vh",
// //   display: "flex",
// //   flexDirection: "column",
// //   background: "linear-gradient(to right, #2c3e50, #fd746c)",
// //   overflowX: "hidden",
// //   width: "100%",
// //   position: "relative",
// //   margin: 0,
// //   padding: 0,
// // });

// // const MainContent = styled(Box)({
// //   flex: 1,
// //   width: "100%",
// //   position: "relative",
// //   overflowX: "hidden",
// // });

// // const App = () => {
// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <ToastContainer position="top-right" autoClose={3000} />
// //       <BrowserRouter>
// //         <GradientBackground>
// //           <Navbar />
// //           <MainContent>
// //             <AppRoutes />
// //           </MainContent>
// //           <Footer />
// //         </GradientBackground>
// //       </BrowserRouter>
// //     </ThemeProvider>
// //   );
// // };

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import BookingList from "./BookingList";
// import Dashboard from "./Dashboard";
// import ServiceList from "./ServiceList";
// import UserList from "./UserList";
// import AppRoutes from "./router/routes";
// import { Box, CssBaseline } from "@mui/material";

// const isAdmin = true; // Replace with actual authentication logic

// const AdminRouter = () => {
//   return (
//     <Routes>
//       <Route path="/admin" element={<Dashboard />} />
//       <Route path="/admin/bookings" element={<BookingList />} />
//       <Route path="/admin/services" element={<ServiceList />} />
//       <Route path="/admin/users" element={<UserList />} />
//       <Route path="*" element={<Navigate to="/admin" />} />
//     </Routes>
//   );
// };

// const AppRouter = () => {
//   return isAdmin ? <AdminRouter /> : <AppRoutes />;
// };

// const MainApp = () => {
//   return (
//     <Router>
//       <CssBaseline />
//       <Box p={3}>
//         <AppRouter />
//       </Box>
//     </Router>
//   );
// };

// export default MainApp;





import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import theme from "./theme/theme";
import AppRoutes from "./router/routes";
import AdminRouter from "./router/AdminRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./context/authContext";

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
  const { currentUser } = useContext(AuthContext);
  const isAdmin = currentUser?.role === "admin"; // Check if the user is an admin

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <GradientBackground>
          <Navbar />
          <MainContent>
            {isAdmin ? <AdminRouter /> : <AppRoutes />}
          </MainContent>
          <Footer />
        </GradientBackground>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
