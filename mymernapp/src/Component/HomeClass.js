import React from 'react';
import styled from 'styled-components';

// Styled components
const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 80vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  padding: 4rem 2rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const PrimaryButton = styled.button`
  background: white;
  color: #3498db;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const FeatureText = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
`;

class HomeClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Home'
    }
  }

  render() {
    return (
      <HomeContainer>
        <HeroSection>
          <HeroTitle>Welcome to Our Application</HeroTitle>
          <HeroSubtitle>
            Discover amazing features and services designed to make your life easier and more productive.
          </HeroSubtitle>
          <PrimaryButton>Get Started</PrimaryButton>
        </HeroSection>

       
      </HomeContainer>
    )
  }
}

export default HomeClass;