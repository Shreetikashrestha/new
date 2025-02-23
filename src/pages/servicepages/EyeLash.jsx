import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Features from "../../components/features/Features";
import {
  ServiceCard,
  ServiceContent,
  ServiceImage,
  ServiceTitle,
} from "../../theme/cards";

const services = [
  {
    id: 1,
    title: "Volume Eyelash Extensions",
    description:
      "Achieve a fuller, more dramatic look with our volume eyelash extensions.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739422160/03.11-Before-After-Social-Images-3-e1532011354826_nfv0ny.jpg",
  },
  {
    id: 2,
    title: "Eyelash Lift",
    description:
      "Lift and curl your natural lashes for a wide-eyed look without the need for extensions.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739421814/eyelashlift_qbgkwx.jpg",
  },
];

const EyelashServices = () => {
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
            Eyelash Services
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "white", textAlign: "center", mb: 6 }}
          >
            Enhance Your Eyes with Beautiful Lashes
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

export default EyelashServices;
