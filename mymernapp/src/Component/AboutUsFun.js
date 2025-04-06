import React from 'react';
import styled from 'styled-components';

// Styled components
const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
  min-height: 80vh;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #3498db;
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  flex: 1;
  min-width: 300px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h3`
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const CardContent = styled.p`
  color: #34495e;
  line-height: 1.7;
`;

const TeamSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const TeamTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #3498db;
    border-radius: 2px;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const TechBadge = styled.span`
  background: #ecf0f1;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  cursor: help;
  
  &:hover::after {
    content: attr(title);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    background: #2c3e50;
    color: #ecf0f1;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: normal;
    z-index: 10;
    margin-bottom: 5px;
  }
`;


function AboutUsFun() {
  return (
    <AboutContainer>
      <AboutHeader>
        <Title>About React Learning</Title>
        <Subtitle>
          This application is designed to help you learn React concepts through practical examples and interactive demos.
        </Subtitle>
      </AboutHeader>

      <ContentSection>
        <Card>
          <CardTitle>Why Learn React?</CardTitle>
          <CardContent>
            React is one of the most popular JavaScript libraries for building user interfaces.
            It allows you to create reusable UI components and efficiently update the DOM when your data changes.
            React's component-based architecture makes it easier to build and maintain complex applications.
          </CardContent>
        </Card>

        <Card>
          <CardTitle>Key Concepts Covered</CardTitle>
          <CardContent>
            This demo application covers fundamental React concepts including components, props, state, hooks,
            event handling, and routing. You'll also see practical examples of styled-components for CSS-in-JS styling
            and modern React patterns.
          </CardContent>
        </Card>

        <Card>
          <CardTitle>How to Use This App</CardTitle>
          <CardContent>
            Explore the different sections to see React in action. Try the counter examples to understand state management,
            check the event handling demo, and examine how routing works. The code is available for you to study and modify.
          </CardContent>
        </Card>
      </ContentSection>

      <TeamSection>
        <TeamTitle>Core React Concepts Demonstrated</TeamTitle>
        <Subtitle>
          This application showcases fundamental React features that every developer should master
        </Subtitle>
        <Technologies>
          <TechBadge title="Building blocks of React apps. Components let you split UI into independent, reusable pieces">
            Components
          </TechBadge>
          <TechBadge title="Functions that let you 'hook into' React state and lifecycle features from function components">
            Hooks
          </TechBadge>
          <TechBadge title="Managing data that changes over time using useState and useEffect hooks">
            State Management
          </TechBadge>
          <TechBadge title="Navigation between different components while maintaining application state">
            React Router
          </TechBadge>
          <TechBadge title="CSS-in-JS library for styling React components with actual CSS syntax">
            Styled Components
          </TechBadge>
          <TechBadge title="Handling user interactions like clicks, form submissions, and more">
            Event Handling
          </TechBadge>
          <TechBadge title="Rendering different UI markup based on application state">
            Conditional Rendering
          </TechBadge>
          <TechBadge title="Passing data from parent to child components">
            Props System
          </TechBadge>
          <TechBadge title="Understanding when components mount, update, and unmount">
            Component Lifecycle
          </TechBadge>
          <TechBadge title="Managing side effects in function components">
            useEffect Hook
          </TechBadge>
          <TechBadge title="Sharing data across components without prop drilling">
            Context API
          </TechBadge>
          <TechBadge title="Reusing stateful logic across components">
            Custom Hooks
          </TechBadge>
        </Technologies>
      </TeamSection>
    </AboutContainer>
  );
}

export default AboutUsFun;