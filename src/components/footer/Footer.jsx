// Footer.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  styled,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#2c3e50",
  color: "white",
  padding: theme.spacing(6, 0),
  marginTop: "auto",
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="xl" sx={{ overflowX: "hidden", width: "100%" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              SHREE BEAUTY STUDIO AND SALON
            </Typography>
            <Typography variant="body2">Sanepa, Lalitpur, Nepal</Typography>
            <Typography variant="body2">P: 01-4542030, 980858790</Typography>
            <Typography variant="body2">
              Email:{" "}
              <Link href="mailto:shreetika59@gmail.com" color="secondary">
                shreetika59@gmail.com
              </Link>
            </Typography>
            <Box mt={2}>
              <Typography variant="subtitle1" gutterBottom>
                <strong>OPENING HOURS</strong>
              </Typography>
              <Typography variant="body2">
                Sunday - Saturday: 9:30 AM - 7 PM
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              QUICK LINKS
            </Typography>
            <Link
              href="/location"
              color="secondary"
              display="block"
              gutterBottom
            >
              Location
            </Link>
            <Link
              href="/gallery"
              color="secondary"
              display="block"
              gutterBottom
            >
              Photo Gallery
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              FOLLOW US
            </Typography>
            <Box>
              <IconButton
                href="https://www.facebook.com/shreetika.shrestha/"
                color="secondary"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://www.youtube.com/" color="secondary">
                <YouTubeIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/shreetikashrestha/"
                color="secondary"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
