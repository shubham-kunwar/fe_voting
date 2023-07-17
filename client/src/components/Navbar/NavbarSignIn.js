import React, { useState } from 'react';
import logo from "./iit_logo.png";
import profilePic from "./image4.webp";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {
    NavbarContainer,
    Logo,
    MenuItem,
    HoverMenuItem,
    HomeLink,
    MenuItemLink,
    ProfileSection,
    Avatar,
    ProfileMenu,
    DiscoverMenu,
  } from './Navbar.css';

const Navbar = ({ email, name }) => {
  const [isProfileMenuVisible, setProfileMenuVisible] = useState(false);
  const [isDiscoverMenuVisible, setDiscoverMenuVisible] = useState(false);
  const navigate = useNavigate();

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

  const handleSignOut = async () => {
    try {
      // Make a POST request to your server to clear the JWT token
      await axios.post('/signout');
      // After successful sign-out, you can navigate the user to the sign-in page
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle error if necessary
    }
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
      <MenuItem    onMouseEnter={handleProfileMenuToggle}
          onMouseLeave={handleProfileMenuLeave}>
      <Avatar
          src={profilePic}
          alt="Profile"
        />
        <ProfileMenu visible={isProfileMenuVisible}>
          <HoverMenuItem>
          <MenuItemLink to="/profile">My Profile</MenuItemLink>
          </HoverMenuItem>
          <HoverMenuItem>
          <MenuItemLink to="/settings">Settings</MenuItemLink>
          </HoverMenuItem>
          <HoverMenuItem>
          <MenuItemLink to="/" onClick={handleSignOut}>
            Sign Out
          </MenuItemLink>
          </HoverMenuItem>
        </ProfileMenu>
      </MenuItem>

    </NavbarContainer>
  );
};

export default Navbar;
