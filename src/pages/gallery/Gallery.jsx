import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const GallerySection = styled(Box)({
  width: "100%",
  padding: "80px 0",
  position: "relative",
});

const GalleryCard = styled(Card)({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  transition: "transform 0.3s ease-in-out",
  aspectRatio: "1",
  "&:hover": {
    transform: "scale(1.02)",
    "& img": {
      transform: "scale(1.1)",
    },
  },
});

const GalleryImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
});

const StyledTitle = styled(Typography)({
  color: "white",
  textAlign: "center",
  marginBottom: "1rem",
  fontWeight: 600,
});

const StyledSubtitle = styled(Typography)({
  color: "#f8a5c2",
  textAlign: "center",
  marginBottom: "3rem",
});

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359894/shreetika_g98a66.png",
      alt: "Beauty Transformation 1",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359893/prem_vgtii8.jpg",
      alt: "Beauty Transformation 2",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359890/5_jcyktt.png",
      alt: "Beauty Transformation 3",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359888/bronze_yzv8rl.jpg",
      alt: "Beauty Transformation 4",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359886/blowout_ivyafr.jpg",
      alt: "Beauty Transformation 5",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359884/1_lafydg.png",
      alt: "Beauty Transformation 6",
    },
  ];

  return (
    <GallerySection>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <StyledTitle variant="h2">Gallery</StyledTitle>
          <StyledSubtitle variant="h5">
            The Princesses of Shree Studio
          </StyledSubtitle>
          <StyledSubtitle variant="h6">
            Thank you for choosing us
          </StyledSubtitle>
        </motion.div>

        <Grid container spacing={3}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GalleryCard>
                  <GalleryImage
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                </GalleryCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </GallerySection>
  );
};

export default GalleryPage;
