import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "./iit_logo.png"

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 16px;
`;

const MenuItem = styled.div`
  font-size: 21px;
  color: #1976d2;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  margin-right: 10px;
  &:hover {
    background-color: #eee;
  }
`;

const HoverMenuItem = styled.button`
  font-size: 14px;
  color: #1976d2;
  padding-top: 10px;
  background: transparent;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 0;
  position: relative;
  &:hover {
    background-color: #eee;
  }
`;

const HomeLink = styled(Link)`
  font-size: 21px;
  color: #1976d2;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  margin-left: 50px;
  text-decoration: none;
  &:hover {
    background-color: #eee;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  display: ${props => (props.visible ? 'block' : 'none')};
  padding-top: 10px;
  margin: 0;
  width: 120px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  background: #1976d2;
  color: #fff;
  border-radius: 25px;
  padding: 5px 25px;
  cursor: pointer;

  &:hover {
    background-color: #e91e63;
    box-shadow: 0px 2px 10px #888888;
  }
`;

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
