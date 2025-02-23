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

const FeatureBox = styled(Box)({
  padding: "2rem",
  textAlign: "center",
  color: "white",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

const services = [
  {
    id: 1,
    title: "Swedish Massage",
    description:
      "Relax and unwind with our Swedish massage, designed to relieve tension and promote relaxation throughout the body.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739428282/GettyImages-1175433234-034014dc5b9c45edaeaf04c7b80ceafc_btcilf.jpg",
    duration: "60 mins",
    price: "$85",
  },
  {
    id: 2,
    title: "Deep Tissue Massage",
    description:
      "Target deeper layers of muscle and connective tissue with our deep tissue massage, perfect for chronic pain relief.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739428318/deep-tissue-massage-on-back_qou7yl.jpg",
    duration: "75 mins",
    price: "$95",
  },
  {
    id: 3,
    title: "Hot Stone Massage",
    description:
      "Experience the soothing warmth of heated stones combined with massage techniques to melt away tension and stress.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739428295/hot-stone-massage-sutherland-house-1024x768_aod9zi.jpg",
    duration: "90 mins",
    price: "$110",
  },
  {
    id: 4,
    title: "Spa Facial",
    description:
      "Indulge in a luxurious facial treatment that cleanses, exfoliates, and hydrates your skin for a radiant glow.",
    image:
      "https://res.cloudinary.com/dawklhf0q/image/upload/v1739428332/woman-face-spa-facial-hydrafacial-microderm_zu47nf.jpg",
    duration: "60 mins",
    price: "$75",
  },
  {
    id: 5,
    title: "Body Scrub",
    description:
      "Revitalize your skin with our invigorating body scrub, removing dead skin cells and leaving your skin smooth and refreshed.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739428354/bamboo-lemongrass-body-scrub-3_pdp-model_lh9pk0.jpg",
    duration: "45 mins",
    price: "$65",
  },
];

const SpaServices = () => {
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
            Spa Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              textAlign: "center",
              mb: 6,
            }}
          >
            Rejuvenate Your Body and Soul
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
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                        px: 4,
                        color: "white",
                      }}
                    >
                      <Typography>{service.duration}</Typography>
                      <Typography>{service.price}</Typography>
                    </Box>
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

export default SpaServices;
