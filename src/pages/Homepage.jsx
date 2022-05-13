import React from "react";
import FoodIcons from "../components/foodIcons";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { Box, Button, Divider } from "@mui/material";
import './HomePage.css'

function Homepage() {
  return (
    <div className="iconContainer">
      <FoodIcons />
      <div className="logoContainer">
        <img src={logo} alt="logo" />
          <Button>
            <Link to="/choose">get started</Link>
          </Button>
      </div>
    </div>
  );
}

export default Homepage;
