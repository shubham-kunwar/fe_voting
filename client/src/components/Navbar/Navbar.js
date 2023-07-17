import React, { useState } from 'react';
import logo from "./iit_logo.png"

import {
  NavbarContainer,
  Logo,
  MenuItem,
  HoverMenuItem,
  HomeLink,
LoginButton,
DropdownMenu
} from './Navbar.css';

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuHover = () => {
    setMenuVisible(true);
  };

  const handleMenuLeave = () => {
    setMenuVisible(false);
  };

  return (
    <NavbarContainer>
      <Logo src={logo} />
      <HomeLink to="/">Home</HomeLink>
      <MenuItem onMouseEnter={handleMenuHover} onMouseLeave={handleMenuLeave}>
        Discover
        <DropdownMenu visible={isMenuVisible}>
          <HoverMenuItem>
            <img src={logo} height="15" alt="react" />
            <a href="https://github.com/facebook/react">React</a>
          </HoverMenuItem>
          <HoverMenuItem>
            <img src={logo} height="15" alt="react site nav" />
            <a href="https://github.com/facebook/react">React</a>
          </HoverMenuItem>
        </DropdownMenu>
      </MenuItem>
      <LoginButton>Admin Login</LoginButton>
    </NavbarContainer>
  );
};

export default Navbar;
