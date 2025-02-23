import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  Email as Mail,
  Phone,
  LocationOn as MapPin,
  Person as User,
  Lock,
  Facebook,
  Instagram,
} from "@mui/icons-material";

const GlassCard = styled(Box)({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "40px",
  height: "100%",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f8a5c2",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  marginBottom: "20px",
});

const SubmitButton = styled(Button)({
  background: "#f8a5c2",
  color: "#2c3e50",
  padding: "12px 30px",
  "&:hover": {
    background: "#f8a5c2cc",
  },
});

const ContactPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard sx={{ height: "100%" }}>
              <Typography variant="h4" sx={{ color: "white", mb: 4 }}>
                Get in Touch
              </Typography>
              <form>
                <StyledTextField fullWidth label="Name" />
                <StyledTextField fullWidth label="Email" />
                <StyledTextField fullWidth label="Phone" />
                <StyledTextField fullWidth label="Message" multiline rows={4} />
                <SubmitButton variant="contained" size="large">
                  Send Message
                </SubmitButton>
              </form>
            </GlassCard>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard sx={{ height: "100%" }}>
              <Typography variant="h4" sx={{ color: "white", mb: 4 }}>
                Contact Information
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <MapPin
                    color="#f8a5c2"
                    size={24}
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Sanepa, Lalitpur, Nepal
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Phone
                    color="#f8a5c2"
                    size={24}
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1" sx={{ color: "white" }}>
                    01-4542030, 980858790
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Mail
                    color="#f8a5c2"
                    size={24}
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1" sx={{ color: "white" }}>
                    shreetika59@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Facebook color="#f8a5c2" size={24} />
                <Instagram color="#f8a5c2" size={24} />
              </Box>
            </GlassCard>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
