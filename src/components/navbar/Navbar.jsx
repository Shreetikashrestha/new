import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { currentUser, logout } = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const menuItems = [
    { text: "HOME", path: "/" },
    { text: "ABOUT US", path: "/about" },
    { text: "PRICE", path: "/price" },
    { text: "GALLERY", path: "/gallery" },
    // { text: "REGISTER", path: "/register" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    handleMenuClose();
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", mt: 2 }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359892/logo_psez6h.jpg"
            alt="Logo"
            style={{
              height: 60,
              width: 120,
              borderRadius: 30,
              marginRight: 20,
            }}
          />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                "& .MuiDrawer-paper": {
                  width: 240,
                  background: "linear-gradient(to right, #2c3e50, #fd746c)",
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ "&:hover": { color: "#f8a5c2" } }}
              >
                {item.text}
              </Button>
            ))}

            {currentUser ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  onClick={handleProfileMenuOpen}
                  sx={{ cursor: "pointer", bgcolor: "#f8a5c2" }}
                />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem component={Link} to="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  sx={{
                    bgcolor: "#f8a5c2",
                    color: "#2c3e50",
                    "&:hover": { bgcolor: "#f8a5c2cc" },
                  }}
                >
                  LOGIN
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  sx={{
                    bgcolor: "#f8a5c2",
                    color: "#2c3e50",
                    "&:hover": { bgcolor: "#f8a5c2cc" },
                  }}
                >
                  REGISTER
                </Button>
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
