import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "600px",
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

const ServiceImage = styled("img")({
  width: "100%",
  height: "400px",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const ServiceContent = styled(Box)({
  padding: "2rem",
  textAlign: "center",
  color: "white",
});

const ServiceTitle = styled(Typography)({
  color: "#f8a5c2",
  fontWeight: 600,
  fontSize: "1.5rem",
  marginBottom: "1rem",
});

const ServiceDescription = styled(Typography)({
  color: "white",
  fontSize: "1rem",
  lineHeight: 1.6,
});

const services = [
  {
    id: 1,
    title: "Haircuts",
    description:
      "Explore a variety of trendy and classic haircuts that suit your style.",
    image:
      "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359889/haircuts_efxpmu.png",
    link: "/services/haircuts",
  },
  {
    id: 2,
    title: "Styling",
    description:
      "Discover our professional styling services to enhance your beauty.",
    image:
      "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359897/styling_lpasvz.png",
    link: "/services/styling",
  },
];

const ServicesPage = () => {
  return (
    <Box sx={{ py: 8, width: "100%" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              textAlign: "center",
              mb: 2,
              fontWeight: 600,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#f8a5c2",
              textAlign: "center",
              mb: 6,
            }}
          >
            Experience the Art of Beauty
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ServiceCard>
                  <Box sx={{ overflow: "hidden" }}>
                    <ServiceImage src={service.image} alt={service.title} />
                  </Box>
                  <ServiceContent>
                    <ServiceTitle variant="h5">{service.title}</ServiceTitle>
                    <ServiceDescription>
                      {service.description}
                    </ServiceDescription>
                  </ServiceContent>
                </ServiceCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;
