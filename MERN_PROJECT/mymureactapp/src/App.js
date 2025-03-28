import React from 'react';
import AboutUsFun from "./Component/AboutUsFun";
import Counter from "./Component/Counter";
import EventDemo from "./Component/EventDemo";
import FooterFun from "./Component/FooterFun";
import HeaderFun from "./Component/HeaderFun";
import HomeClass from "./Component/HomeClass";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HookCounter from "./Component/HookDemo/HookCounter";
import styled from 'styled-components';
import HookSum from './Component/HookDemo/HookSum';

// Styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const NavBar = styled.nav`
  background: #2c3e50;
  padding: 1rem 2rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: #34495e;
    color: #fff;
  }

  &.active {
    background: #3498db;
    color: white;
  }
`;


const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

const SumDisplay = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  font-size: 1.2rem;
  text-align: center;
`;

function App(props) {
  return (
    <Router>
      <AppContainer>
        
        
        <NavBar>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/btnclick">Click Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/counter">Counter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hookcounter">Hook Counter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hooksum">Hook Sum</NavLink>
            </NavItem>
          </NavList>
        </NavBar>

        <MainContent>
          {/* {props.txt1 && props.txt2 && (
            <SumDisplay>
              Sum: {parseInt(props.txt1) + parseInt(props.txt2)}
            </SumDisplay>
          )} */}
          
          <Routes>
            <Route path="/" element={<HomeClass/>}/> 
            <Route path="/aboutus" element={<AboutUsFun/>}/>
            <Route path="/btnclick" element={<EventDemo/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/hookcounter" element={<HookCounter/>}/>
            <Route path="/hooksum" element={<HookSum/>}/>
          </Routes>
        </MainContent>
        
      </AppContainer>
    </Router>
  );
}

export default App;