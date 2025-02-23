import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [confirmation, setConfirmation] = useState("");
  const [services, setServices] = useState([]);
  const { currentUser } = useContext(AuthContext);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.error("No token found in local storage");
          return;
        }

        const { data } = await axios.get(
          "http://localhost:8080/api/services/view_services",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setServices(data.data); // data should be an array of services
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  console.log(services);

  // Handle form field changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("accessToken");
    if (!token) {
      setConfirmation("No token found. Please log in first.");
      return;
    }

    // 2. Create the booking data
    const bookingData = {
      Date: formData.date,
      Day: new Date(formData.date).toLocaleDateString("en-US", {
        weekday: "long",
      }),
      Time: formData.time,
      Status: "Pending",
      serviceId: formData.service,
      userId: currentUser.id,
    };
    console.log(bookingData);

    try {
      // 3. Send the POST request with the token
      const response = await axios.post(
        "http://localhost:8080/api/bookings/create",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        // if booking is created successfully
        setConfirmation(
          `Thank you, ${formData.name}! Your booking (service ID: ${formData.service}) on ${formData.date} at ${formData.time} has been confirmed.`
        );
      } else {
        setConfirmation(
          `Booking failed: ${response.data?.message || "Unknown error"}`
        );
      }
    } catch (error) {
      setConfirmation("Error while saving booking: " + error.message);
    }

    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });
  };

  return (
    <Box sx={{ py: 8, width: "100%" }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{ color: "white", textAlign: "center", mb: 2, fontWeight: 600 }}
          >
            Booking Form
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "white", textAlign: "center", mb: 6 }}
          >
            Secure Your Appointment Today
          </Typography>
        </motion.div>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  select
                  label="Select Service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  margin="normal"
                >
                  {services.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.Servicename} - {option.Price}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  label="Preferred Time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{ mt: 2 }}
                >
                  Book Now
                </Button>
              </form>
              {confirmation && (
                <Box
                  sx={{
                    mt: 4,
                    p: 2,
                    bgcolor: "#d4edda",
                    color: "#155724",
                    borderRadius: "8px",
                  }}
                >
                  {confirmation}
                </Box>
              )}
            </FormContainer>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 8 }} />
      </Container>
    </Box>
  );
};

export default BookingForm;
