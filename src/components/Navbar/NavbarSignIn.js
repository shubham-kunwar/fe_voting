import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "./iit_logo.png";
import profilePic from "./image4.webp";

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
  text-decoration: none;

  &:hover {
    background-color: #eee;
  }
`;

const MenuItemLink = styled(Link)`
  display: block;
  width: 100%;
  font-size: 14px;
  color: #1976d2;
  text-decoration: none;
  padding: 5px;
  margin: 10px;
  transition: background-color 0.5s;

  &:hover {
    background-color: #eee;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 18px;
  cursor: pointer;
`;

const ProfileMenu = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 2px);
  right: 10px;
  background-color: #fff;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${Avatar}:hover + & {
    display: block;
  }
`;

const DiscoverMenu = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: calc(85% + 2px);
  left: 0;
  background-color: #fff;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${MenuItem}:hover & {
    display: block;
  }
`;

const Navbar = ({ email, name }) => {
  const [isProfileMenuVisible, setProfileMenuVisible] = useState(false);
  const [isDiscoverMenuVisible, setDiscoverMenuVisible] = useState(false);

  const handleProfileMenuToggle = () => {
    setProfileMenuVisible(!isProfileMenuVisible);
  };

  const handleDiscoverMenuToggle = () => {
    setDiscoverMenuVisible(!isDiscoverMenuVisible);
  };

  const handleMenuLeave = () => {
    setDiscoverMenuVisible(false);
  };

  const handleProfileMenuLeave = () => {
    setProfileMenuVisible(false);
  };

  return (
    <NavbarContainer>
      <Logo src={logo} />
      <HomeLink to="/">Home</HomeLink>
      <MenuItem onMouseEnter={handleDiscoverMenuToggle} onMouseLeave={handleMenuLeave}>
        Discover
        <DiscoverMenu visible={isDiscoverMenuVisible}>
          <HoverMenuItem>
            <img src={logo} height="15" alt="react" />
            <a href="https://github.com/facebook/react">React</a>
          </HoverMenuItem>
          <HoverMenuItem>
            <img src={logo} height="15" alt="react site nav" />
            <a href="https://github.com/facebook/react">React</a>
          </HoverMenuItem>
        </DiscoverMenu>
      </MenuItem>
      <ProfileSection>
        <Avatar
          src={profilePic}
          alt="Profile"
          onMouseEnter={handleProfileMenuToggle}
          onMouseLeave={handleProfileMenuLeave}
        />
        <ProfileMenu visible={isProfileMenuVisible}>
          <MenuItemLink to="/profile">My Profile</MenuItemLink>
          <MenuItemLink to="/settings">Settings</MenuItemLink>
          <MenuItemLink to="/">Sign Out</MenuItemLink>
        </ProfileMenu>
      </ProfileSection>
    </NavbarContainer>
  );
};

export default Navbar;
