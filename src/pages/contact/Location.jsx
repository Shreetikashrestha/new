import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

const GlassCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
});

export const LocationPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{ color: "white", mb: 2, textAlign: "center" }}
        >
          Our Location
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#f8a5c2", mb: 4, textAlign: "center" }}
        >
          Visit us at our studio
        </Typography>
        <GlassCard>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: "white", mb: 3 }}>
                How to Find Us
              </Typography>
              <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
                We are located in the heart of Sanepa, Lalitpur. Our studio is
                easily accessible and has ample parking space.
              </Typography>
              <Box sx={{ my: 3 }}>
                <Typography variant="h6" sx={{ color: "#f8a5c2", mb: 2 }}>
                  Opening Hours
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Sunday - Saturday: 9:30 AM - 7 PM
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Typography variant="h6" sx={{ color: "#f8a5c2", mb: 2 }}>
                  Contact
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Phone: 01-4542030, 980858790
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: "10px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.905092232462!2d85.30355831128456!3d27.689328076093624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19162051f91d%3A0xdca5ab048789b6d5!2sHotel%20Kimbu!5e0!3m2!1sen!2snp!4v1733472718836!5m2!1sen!2snp"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </GlassCard>
      </motion.div>
    </Container>
  );
};
