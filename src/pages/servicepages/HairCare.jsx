import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Features from "../../components/features/Features";
import { ServiceCard, ServiceContent, ServiceImage, ServiceTitle } from "../../theme/cards";

const services = [
  {
    id: 1,
    title: "Haircut",
    description:
      "Professional stylists providing personalized haircut services.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739423698/Butterfly_cut_on_thick_hair_sqhxsd.png"
  },
  {
    id: 2,
    title: "Hair Coloring",
    description: "Subtle highlights to bold color changes for a vibrant look.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 3,
    title: "Hair Treatments",
    description:
      "Nourishing treatments from deep conditioning to keratin treatments.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 4,
    title: "Blowouts",
    description: "Smooth, voluminous finish for a polished look.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 5,
    title: "Updos & Styling",
    description: "Elegant updos and stylish braids for any occasion.",
    image: "/api/placeholder/400/300",
  },
];

const HairCareServices = () => {
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
            Hair Care Services
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "white", textAlign: "center", mb: 6 }}
          >
            Transform Your Hair with Expert Care
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

export default HairCareServices;
