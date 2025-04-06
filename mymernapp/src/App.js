import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

import AboutUsFun from "./Component/AboutUsFun";
import Counter from "./Component/Counter";
import EventDemo from "./Component/EventDemo";
import HeaderFun from "./Component/HeaderFun";
import HomeClass from "./Component/HomeClass";
import HookCounter from "./Component/HooksDemo/HookCounter";
import HookSum from "./Component/HooksDemo/HookSum";
import FooterFun from "./Component/FooterFun";
import TodoApp from './Component/TodoApp/TodoApp';

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const NavBar = styled.nav`
  background: linear-gradient(135deg, #2c3e50 0%, #4a6491 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.mobileMenuOpen ? '0' : '-100%')};
    width: 80%;
    height: 100vh;
    background: #2c3e50;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    transition: left 0.3s ease;
    z-index: 1001;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
  }
`;

const NavItem = styled.li`
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #3498db;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ProfileSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 200px;
  z-index: 100;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.3s ease;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.8rem 1rem;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    color: #3498db;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${(props) => (props.mobileMenuOpen ? 'block' : 'none')};
`;

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <NavBar>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavList mobileMenuOpen={mobileMenuOpen}>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/aboutus">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/btnclick">Event Demo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/counter">Counter</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/hookcounter">Hooks Counter</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/hooksum">Hooks Sum</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/todoapp">ToDo App</NavLink>
          </NavItem>
        </NavList>

        <ProfileSection>
          <ProfileIcon onClick={toggleDropdown}>
            <FaUser />
          </ProfileIcon>
          <DropdownMenu isOpen={isDropdownOpen}>
            <DropdownItem to="/profile">My Profile</DropdownItem>
            <DropdownItem to="/settings">Settings</DropdownItem>
            <DropdownItem to="/logout">Logout</DropdownItem>
          </DropdownMenu>
        </ProfileSection>
      </NavBar>

      <Overlay mobileMenuOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomeClass />} />
            <Route path="/aboutus" element={<AboutUsFun />} />
            <Route path="/btnclick" element={<EventDemo />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/hookcounter" element={<HookCounter />} />
            <Route path="/hooksum" element={<HookSum />} />
            <Route path="/todoapp" element={<TodoApp/>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
          </Routes>
        </MainContent>
        <FooterFun />
      </AppContainer>
    </Router>
  );
}

export default App;
