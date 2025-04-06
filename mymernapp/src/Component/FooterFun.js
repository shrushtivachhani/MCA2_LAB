import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the footer
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%);
  color: #fff;
  padding: 3rem 2rem;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #4da6ff;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 50%;
      height: 2px;
      background: #4da6ff;
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.8rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const FooterLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #4da6ff;
  }

  &::before {
    content: '→';
    margin-right: 8px;
    color: #4da6ff;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: #4da6ff;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

function FooterFun() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Quick Links Section */}
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/aboutus">About Us</FooterLink></li>
            <li><FooterLink to="/counter">Counter Demo</FooterLink></li>
            <li><FooterLink to="/hookcounter">Hooks Counter</FooterLink></li>
            <li><FooterLink to="/hooksum">Hooks Sum</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        {/* React Concepts Section */}
        <FooterSection>
          <h3>React Concepts</h3>
          <FooterLinks>
            <li><FooterLink to="/components">Components</FooterLink></li>
            <li><FooterLink to="/props">Props</FooterLink></li>
            <li><FooterLink to="/state">State</FooterLink></li>
            <li><FooterLink to="/hooks">Hooks</FooterLink></li>
            <li><FooterLink to="/routing">Routing</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        {/* Resources Section */}
        <FooterSection>
          <h3>Resources</h3>
          <FooterLinks>
            <li><FooterLink to="/docs">Documentation</FooterLink></li>
            <li><FooterLink to="/tutorials">Tutorials</FooterLink></li>
            <li><FooterLink to="/examples">Examples</FooterLink></li>
            <li><FooterLink to="/blog">Blog</FooterLink></li>
            <li><FooterLink to="/community">Community</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        {/* Contact Section */}
        <FooterSection>
          <h3>Connect With Us</h3>
          <p>Email: contact@reactapp.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 React Street, Component City</p>
          
          <SocialIcons>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} React App. All rights reserved.
        <p>Built with React, React Router, and Styled Components</p>
      </Copyright>
    </FooterContainer>
  );
}

export default FooterFun;
