// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Select,
//   MenuItem,
//   Snackbar,
// } from "@mui/material";
// import axios from "axios";

// const API_URL = "https://your-api-url.com/api/bookings";

// const BookingList = () => {
//   const [bookings, setBookings] = useState([]);
//   const [snackbar, setSnackbar] = useState({ open: false, message: "" });

//   // Fetch Bookings from API
//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//       setSnackbar({ open: true, message: "Failed to load bookings!" });
//     }
//   };

//   // Update Booking Status
//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`${API_URL}/${id}`, { status: newStatus });
//       setBookings((prev) =>
//         prev.map((booking) =>
//           booking.id === id ? { ...booking, status: newStatus } : booking
//         )
//       );
//       setSnackbar({ open: true, message: "Booking status updated!" });
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       setSnackbar({ open: true, message: "Failed to update status!" });
//     }
//   };

//   // Delete Booking
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setBookings((prev) => prev.filter((booking) => booking.id !== id));
//       setSnackbar({ open: true, message: "Booking deleted successfully!" });
//     } catch (error) {
//       console.error("Error deleting booking:", error);
//       setSnackbar({ open: true, message: "Failed to delete booking!" });
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Booking Management
//       </Typography>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>User</TableCell>
//               <TableCell>Service</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {bookings.map((booking) => (
//               <TableRow key={booking.id}>
//                 <TableCell>{booking.id}</TableCell>
//                 <TableCell>{booking.user}</TableCell>
//                 <TableCell>{booking.service}</TableCell>
//                 <TableCell>
//                   <Select
//                     value={booking.status}
//                     onChange={(e) =>
//                       handleStatusChange(booking.id, e.target.value)
//                     }
//                   >
//                     <MenuItem value="Pending">Pending</MenuItem>
//                     <MenuItem value="Confirmed">Confirmed</MenuItem>
//                     <MenuItem value="Completed">Completed</MenuItem>
//                   </Select>
//                 </TableCell>

//                 <TableCell>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     onClick={() => handleDelete(booking.id)}
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Snackbar for notifications */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={3000}
//         onClose={() => setSnackbar({ open: false, message: "" })}
//         message={snackbar.message}
//       />
//     </Box>
//   );
// };

// export default BookingList;
import React, { useState, useEffect } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Select, MenuItem } from "@mui/material";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Failed to fetch bookings:", err));
  }, []);

  const handleStatusChange = (id, status) => {
    axios.put(`https://api.example.com/bookings/${id}`, { status })
      .then(() => {
        setBookings(bookings.map((booking) =>
          booking.id === id ? { ...booking, status } : booking
        ));
      })
      .catch((err) => console.error("Failed to update booking status:", err));
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Booking Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.user}</TableCell>
                <TableCell>{booking.service}</TableCell>
                <TableCell>
                  <Select
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Confirmed">Confirmed</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button color="error" onClick={() => handleStatusChange(booking.id, 'Cancelled')}>
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BookingList;
