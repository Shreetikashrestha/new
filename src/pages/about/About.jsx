import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const StyledSection = styled(Box)({
  padding: "80px 0",
  width: "100%",
});

const GlassPaper = styled(Paper)({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  color: "white",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "500px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
});

const HighlightText = styled(Typography)({
  color: "#f8a5c2",
  fontWeight: 600,
  marginBottom: "1rem",
});

const AboutPage = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Section */}
      <StyledSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "white", fontWeight: 600, mb: 3 }}
                >
                  About Shree Beauty
                </Typography>
                <Typography variant="h5" sx={{ color: "#f8a5c2", mb: 4 }}>
                  Redefining Beauty Since 2020
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "white", mb: 4, lineHeight: 1.8 }}
                >
                  Where artistry meets excellence in every beauty
                  transformation.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <StyledImage
                  src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359898/makeupartist_yoxqii.png"
                  alt="Salon Interior"
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>

      {/* Vision Section */}
      <StyledSection>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <GlassPaper>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <HighlightText variant="h6">Our Vision</HighlightText>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      To revolutionize the beauty industry in Nepal by bringing
                      international standards while celebrating our unique
                      cultural heritage.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <HighlightText variant="h6">Our Mission</HighlightText>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      To empower individuals through transformative beauty
                      experiences, helping them discover their most confident
                      selves.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <HighlightText variant="h6">Our Values</HighlightText>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      Excellence, Innovation, Authenticity, and Customer-First
                      approach in everything we do.
                    </Typography>
                  </Grid>
                </Grid>
              </GlassPaper>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>

      {/* Story Section */}
      <StyledSection>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <GlassPaper>
                <HighlightText variant="h5">Our Story</HighlightText>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Founded by Shreetika Shrestha, a visionary makeup artist with
                  international training, Shree Beauty & Makeup Studio began its
                  journey in 2020. What started as a dream has evolved into one
                  of Nepal's premier beauty destinations.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Our team of internationally trained professionals brings the
                  latest global techniques and trends to Nepal, ensuring each
                  client receives a world-class beauty experience.
                </Typography>
              </GlassPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <GlassPaper>
                <HighlightText variant="h5">Our Expertise</HighlightText>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  We specialize in bridal makeup, advanced skincare treatments,
                  and personalized beauty consultations. Our approach combines
                  traditional techniques with modern innovations to create
                  stunning, lasting results.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Each service is tailored to individual needs, ensuring that
                  every client leaves our studio feeling confident and
                  beautiful.
                </Typography>
              </GlassPaper>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>
    </Box>
  );
};

export default AboutPage;
