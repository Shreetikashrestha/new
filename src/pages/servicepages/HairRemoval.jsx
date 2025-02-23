import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Features from "../../components/features/Features";
import { ServiceCard, ServiceContent, ServiceImage, ServiceTitle } from "../../theme/cards";

const services = [
  {
    id: 1,
    title: "Waxing",
    description:
      "Experience smooth skin with our professional waxing services.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739426540/waxing-1_lthdfm.png",
  },
  {
    id: 2,
    title: "Laser Hair Removal",
    description:
      "Achieve long-lasting results with our advanced laser hair removal technology.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739426606/benefitsoflaserhairremoval_wwcmfc.jpg",
  },
  {
    id: 3,
    title: "Threading",
    description:
      "Precise hair removal for eyebrows and facial hair, ensuring a clean look.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739426670/Threading-1_fvmivy.png",
  },
  {
    id: 4,
    title: "Sugaring",
    description:
      "A natural alternative to waxing, gentle on the skin and effective for hair removal.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739426657/natural-sugaring-products-for-gentle-hair-removal-1-800px1200px_1e0953df-8a6b-44f0-ba05-cab9059914da_cenvin.jpg",
  },
  {
    id: 5,
    title: "Body Shaving",
    description:
      "Get a clean and smooth finish with our professional body shaving services.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739426691/Body_Shaving_Blog_Featured_Image_dhwk4w.jpg",
  },
];

const HairRemovalServices = () => {
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
            sx={{ color: "white", textAlign: "center", mb: 2, fontWeight: 600 }}
          >
            Hair Removal Services
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "white", textAlign: "center", mb: 6 }}
          >
            Smooth & Silky Skin Awaits You
          </Typography>
        </motion.div>

        <Features />

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 8 }} />

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 8 }} />
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={service.id}>
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
                    <Typography
                      sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 2 }}
                    >
                      {service.description}
                    </Typography>
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

export default HairRemovalServices;
