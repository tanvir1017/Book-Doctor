import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor Portals
          </Typography>
          <Box className="navigation-link">
            <Link to="/home">
              <Button style={{ color: "white" }}>Home</Button>
            </Link>
            <Link to="/appointment">
              <Button style={{ color: "white" }}>Appointment</Button>
            </Link>
            {user.displayName && (
              <Link to="/dashboard">
                <Button style={{ color: "white" }}>Dashboard</Button>
              </Link>
            )}
            {user.displayName && (
              <Button style={{ color: "white" }}>{user.displayName}</Button>
            )}
            {!user.email ? (
              <Link to="/login">
                <Button style={{ color: "white" }}>Log in</Button>
              </Link>
            ) : (
              <Button
                color="inherit"
                style={{ color: "white" }}
                onClick={logout}
              >
                Log out
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
