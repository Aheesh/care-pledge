import React from "react";
import "./Navbar.css";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Menu customMenu inverted>
      <Menu.Item name="Care Pledge">
        <Link to="/">
          <b>Care Pledge</b>
        </Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="Projects"
          // active={activeItem === 'projects'}
          // onClick={this.handleItemClick}
        >
          <Link to="/projects">Projects</Link>
        </Menu.Item>

        <Menu.Item
          name="Account"
          // active={activeItem === 'account'}
          // onClick={this.handleItemClick}
        >
          <Link to="/account">Account</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
