import React from "react";
import "./Navbar.css";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Menu inverted className="customMenu">
      <Menu.Item name="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item name="about">
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
