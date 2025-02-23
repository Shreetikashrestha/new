// pages/Home.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

// Styled components
const HeroText = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display, serif",
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(2),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  background: alpha("#fff", 0.9),
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

const ProductOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translate(20px, -50%)",
  background: alpha(theme.palette.background.paper, 0.9),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  textAlign: "center",
  boxShadow: theme.shadows[4],
}));

// Service card component
const ServiceCardComponent = ({ icon, title, path }) => {
  const navigate = useNavigate();

  return (
    <ServiceCard>
      <Typography variant="h2" sx={{ fontSize: "3rem", mb: 2 }}>
        {icon}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate(path)}
        sx={{ mt: "auto" }}
      >
        See Details
      </Button>
    </ServiceCard>
  );
};

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const services = [
    { icon: "💇‍♀️", title: "Hair Care", path: "/haircare" },
    { icon: "💅", title: "Nail Care", path: "/nailcare" },
    { icon: "🪒", title: "Hair Removal", path: "/hair-removal" },
    { icon: "👁️", title: "Eye Lashes", path: "/eyelashes" },
    { icon: "🌟", title: "Skin Care", path: "/skincare" },
    { icon: "🛀", title: "Spa Treatment", path: "/spa" },
    { icon: "👰", title: "Wedding Pack", path: "/wedding" },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <HeroText
              variant="h1"
              sx={{ fontSize: { xs: "2.5rem", md: "6rem" } }}
            >
              *Blessing for every skin
            </HeroText>
            <Typography variant="h5" sx={{ mb: 4, color: "white" }}>
              YOUR MIRACLE CARE FOR BEAUTY
            </Typography>
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "translateX(8px)",
                },
                transition: "transform 0.3s ease-in-out",
              }}
            >
              GET YOURS
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <img
                src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359884/3_b173w0.png"
                alt="Woman with perfect skin"
                style={{
                  width: "100%",
                  borderRadius: theme.spacing(2),
                }}
              />
              <ProductOverlay>
                <img
                  src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359888/brush_ybdves.jpg"
                  alt="Product brush"
                  style={{
                    width: "80px",
                    marginBottom: theme.spacing(1),
                  }}
                />
                <Typography variant="h6" color="primary">
                  20+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HIGH DEF Brush
                </Typography>
              </ProductOverlay>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Actress Section */}
      <Box sx={{ py: 8, textAlign: "left" }}>
        <img
          src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359894/shreetika_g98a66.png"
          alt="Actress"
          style={{
            width: "50%",
            marginBottom: theme.spacing(4),
          }}
        />
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.secondary.main,
            fontFamily: "Playfair Display, serif",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            gap: 2,
            fontWeight: "bold",
          }}
        >
          BEAUTY SALON PREFERRED AND LOVED BY EVERYONE
          <ArrowForwardIcon />
        </Typography>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8 }}>
        <Typography variant="h2" align="center" sx={{ mb: 2, color: "white" }}>
          Choose Our Services
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: "white" }}>
          Premium Services with Comfort & Luxury
        </Typography>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <ServiceCardComponent {...service} />
            </Grid>
          ))}
          {/* Appointment Card */}
          <Grid item xs={12} sm={6} md={3}>
            <ServiceCard>
              <Typography variant="h6" gutterBottom>
                Book Appointment
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/booking")}
                sx={{ mt: "auto" }}
              >
                Click to Book
              </Button>
            </ServiceCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
