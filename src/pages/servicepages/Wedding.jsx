import React from "react";
import { Box, Container, Grid, Typography, Chip, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Features from "../../components/features/Features";

const ServiceCard = styled(Box)(({ theme }) => ({
  borderRadius: "20px",
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

const ServiceImage = styled("img")({
  width: "100%",
  maxHeight: "300px",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const ServiceContent = styled(Box)({
  padding: "1.5rem",
  textAlign: "center",
  color: "white",
  flexGrow: 1,
});

const StyledChip = styled(Chip)({
  margin: "0.25rem",
  background: "rgba(255, 255, 255, 0.1)",
  color: "white",
  border: "1px solid rgba(255, 255, 255, 0.3)",
});

const packages = [
  {
    id: 1,
    title: "Gold Package",
    description:
      "Our premium Gold Package includes full bridal makeup, hairstyling, and a complete skincare treatment. Enjoy a trial session and a personalized consultation.",
    price: "$1200",
    image:
      "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359884/1_lafydg.png",
    duration: "6 hours",
    features: [
      "Trial Session",
      "Hair & Makeup",
      "Skincare Treatment",
      "Touch-ups",
      "Assistant Included",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Silver Package",
    description:
      "The Silver Package offers bridal makeup and hairstyling, along with a skincare consultation. Perfect for brides looking for elegance without the extras.",
    price: "$800",
    image:
      "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359884/4_yiedwf.png",
    duration: "4 hours",
    features: ["Hair & Makeup", "Skincare Consultation", "Touch-ups"],
    popular: false,
  },
  {
    id: 3,
    title: "Bronze Package",
    description:
      "Our Bronze Package includes basic bridal makeup and hairstyling. Ideal for intimate weddings or smaller ceremonies.",
    price: "$500",
    image:
      "https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359888/bronze_yzv8rl.jpg",
    duration: "3 hours",
    features: ["Basic Hair & Makeup", "Mini Touch-up Kit"],
    popular: false,
  },
];

const PackagesSection = () => {
  return (
    <Box sx={{ py: 6, width: "100%" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            sx={{ color: "white", textAlign: "center", mb: 2, fontWeight: 600 }}
          >
            Bridal Packages
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "white", textAlign: "center", mb: 4, opacity: 0.9 }}
          >
            Make Your Special Day Unforgettable
          </Typography>
        </motion.div>

        <Features />

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 8 }} />

        <Grid container spacing={3} justifyContent="center">
          {packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ServiceCard>
                  <Box sx={{ overflow: "hidden", position: "relative" }}>
                    <ServiceImage src={pkg.image} alt={pkg.title} />
                    {pkg.popular && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          padding: "6px 12px",
                          borderRadius: "15px",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <DiamondIcon sx={{ color: "white" }} />
                        <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
                          Most Popular
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <ServiceContent>
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 600, mb: 1 }}
                    >
                      {pkg.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        mb: 2,
                        fontSize: "0.9rem",
                      }}
                    >
                      {pkg.description}
                    </Typography>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {pkg.features.map((feature, i) => (
                        <StyledChip
                          key={i}
                          icon={<CheckCircleIcon />}
                          label={feature}
                          size="small"
                        />
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                        px: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <AccessTimeIcon sx={{ color: "white" }} />
                        <Typography sx={{ color: "white" }}>
                          {pkg.duration}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <LocalOfferIcon sx={{ color: "white" }} />
                        <Typography sx={{ color: "white", fontWeight: 600 }}>
                          {pkg.price}
                        </Typography>
                      </Box>
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

export default PackagesSection;
