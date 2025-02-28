import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List sx={{ width: 240, bgcolor: "background.paper", height: "100vh" }}>
        <ListItem button component={Link} to="/admin">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/users">
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/admin/services">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/admin/bookings">
          <ListItemText primary="Bookings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
