import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Vote from "../Vote/Vote";
import NavbarSignIn from "../Navbar/NavbarSignIn";
import menuItems from './data.json';
import ResultPage from '../Result/Result';
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

const Sidebar = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
`;

const MainContent = styled.div`
  width:100%;
`;



const MenuItem = styled.button`
  display: block;
  width:100%;
  padding: 12px;
  background-color: ${(props) => (props.active ? '#1976d2' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 8px;

  ${(props) => !props.active && `
    &:hover {
      background-color: #e0e0e0;
    }
  `}
`;


const General = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

const Tutorial = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

const Result = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

const Voting = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

const Dashboard = () => {
  const { email, name } = useParams();
  const [activeMenuItem, setActiveMenuItem] = useState('voting');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };


  return (
    <div>
      <NavbarSignIn email={email} name={name} />
      <DashboardContainer>
        <Sidebar>
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.name}
              active={activeMenuItem === menuItem.name}
              onClick={() => handleMenuItemClick(menuItem.name)}
            >
              {menuItem.name.charAt(0).toUpperCase() + menuItem.name.slice(1)}
            </MenuItem>
          ))}
        </Sidebar>
        <MainContent>
          <Voting active={activeMenuItem === 'voting'}><Vote/></Voting>
          <General active={activeMenuItem === 'general'}><ResultPage/></General>
          <Tutorial active={activeMenuItem === 'tutorial'}>Tutorial Content</Tutorial>
          <Result active={activeMenuItem === 'result'}><ResultPage/></Result>
        </MainContent>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
