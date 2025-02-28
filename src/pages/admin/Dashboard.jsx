// import React, { useState, useEffect } from "react";
// import { Box, Grid, Paper, Typography } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts";

// // Mock data for graphs
// const userActivityData = [
//   { name: "Jan", users: 100 },
//   { name: "Feb", users: 200 },
//   { name: "Mar", users: 150 },
//   { name: "Apr", users: 300 },
// ];

// const bookingData = [
//   { name: "Jan", bookings: 80 },
//   { name: "Feb", bookings: 120 },
//   { name: "Mar", bookings: 90 },
//   { name: "Apr", bookings: 200 },
// ];

// const Dashboard = () => {
//   const [userCount, setUserCount] = useState(250);
//   const [bookingCount, setBookingCount] = useState(150);
//   const [serviceCount, setServiceCount] = useState(20);

//   useEffect(() => {
//     // Fetch counts from API (Replace with real API)
//     // Example: axios.get('/api/stats').then(res => { setUserCount(res.data.users) })
//   }, []);

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Admin Dashboard
//       </Typography>

//       {/* Cards Section */}
//       <Grid container spacing={3} mb={4}>
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#e3f2fd" }}>
//             <Typography variant="h6">Total Users</Typography>
//             <Typography variant="h4">{userCount}</Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#ffe0b2" }}>
//             <Typography variant="h6">Total Bookings</Typography>
//             <Typography variant="h4">{bookingCount}</Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#c8e6c9" }}>
//             <Typography variant="h6">Total Services</Typography>
//             <Typography variant="h4">{serviceCount}</Typography>
//           </Paper>
//         </Grid>
//       </Grid>

//       {/* Graphs Section */}
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Paper sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               User Activity
//             </Typography>
//             <BarChart width={500} height={300} data={userActivityData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="users" fill="#82ca9d" />
//             </BarChart>
//           </Paper>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Paper sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               Bookings Overview
//             </Typography>
//             <LineChart width={500} height={300} data={bookingData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
//             </LineChart>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.example.com/dashboard-data")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch dashboard data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {loading ? (
        <Typography>Loading dashboard data...</Typography>
      ) : (
        <>
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Users</Typography>
                  <Typography variant="h4">{data.totalUsers}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Bookings</Typography>
                  <Typography variant="h4">{data.totalBookings}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Active Services</Typography>
                  <Typography variant="h4">{data.activeServices}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.monthlyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="bookings" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </Box>
  );
};

export default Dashboard;
