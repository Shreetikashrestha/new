import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Features from "../../components/features/Features";
import { ServiceCard, ServiceContent, ServiceImage, ServiceTitle } from "../../theme/cards";

const services = [
  {
    id: 1,
    title: "Facial Treatment",
    description:
      "Rejuvenate your skin with our customized facial treatments designed to cleanse, exfoliate, and hydrate.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 2,
    title: "Chemical Peel",
    description:
      "Improve skin texture and tone with our professional chemical peel services, tailored to your skin type.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 3,
    title: "Hydrating Mask",
    description:
      "Restore moisture and vitality to your skin with our deeply hydrating masks, suitable for all skin types.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 4,
    title: "Acne Treatment",
    description:
      "Target and treat acne with our specialized treatments designed to clear and prevent breakouts.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 5,
    title: "Anti-Aging Treatment",
    description:
      "Combat signs of aging with our advanced anti-aging treatments that promote collagen production and skin elasticity.",
    image: "/api/placeholder/400/300",
  },
];

const SkincareServices = () => {
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
            Skincare Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              textAlign: "center",
              mb: 6,
            }}
          >
            Rejuvenate Your Skin & Glow
          </Typography>
        </motion.div>

        <Features />

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 8 }} />

        {/* Services Grid */}
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

export default SkincareServices;
