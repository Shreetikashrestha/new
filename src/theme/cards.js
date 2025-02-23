import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";

export const ServiceCard = styled(Box)(({ theme }) => ({
  height: "500px",
  borderRadius: "20px",
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

export const ServiceImage = styled("img")({
  width: "100%",
  height: "250px",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const ServiceContent = styled(Box)({
  padding: "2rem",
  textAlign: "center",
  color: "white",
});

export const ServiceTitle = styled(Typography)({
  color: "#ffffff",
  fontWeight: 600,
  fontSize: "1.5rem",
  marginBottom: "1rem",
});
