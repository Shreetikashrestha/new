import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";

const Features = () => {
  const features = [
    {
      icon: <StarIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Premium Experience",
      description: "Luxurious treatments using high-quality products",
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Flexible Hours",
      description: "Open 7 days a week with evening appointments",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Expert Therapists",
      description: "Certified professionals with years of experience",
    },
    {
      icon: <CardGiftcardIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Gift Cards",
      description: "Perfect for any special occasion",
    },
  ];
  const FeatureBox = styled(Box)({
    padding: "2rem",
    textAlign: "center",
    color: "white",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  });
  return (
    <Grid container spacing={4} sx={{ mb: 8 }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <FeatureBox>
              {feature.icon}
              <Typography variant="h6" sx={{ color: "white", my: 2 }}>
                {feature.title}
              </Typography>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {feature.description}
              </Typography>
            </FeatureBox>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
