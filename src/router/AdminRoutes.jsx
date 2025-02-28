import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import BookingList from "../pages/admin/BookingList";
import Dashboard from "../pages/admin/Dashboard";
import ServiceList from "../pages/admin/ServiceList";
import UserList from "../pages/admin/UserList";
import Sidebar from "../components/admin/Sidebar";
import ProtectedRoute from "../router/ProtectedRoute"; // Import the ProtectedRoute

const AdminRouter = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <ProtectedRoute>
                <BookingList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services"
            element={
              <ProtectedRoute>
                <ServiceList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminRouter;
