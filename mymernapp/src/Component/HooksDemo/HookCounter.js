import React from 'react';
import styled from 'styled-components';

// Styled components
const DemoContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Title = styled.h1`
  color: ${props => props.color || '#333'};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const CounterDisplay = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${props => props.color || '#333'};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ResetButton = styled(Button)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }

  &:disabled {
    background-color: #95a5a6;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #eee;
  margin: 2rem 0;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #fadbd8;
  border-radius: 4px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

function HookCounter() {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState("#3498db");
  const [error, setError] = React.useState("");

  // Change color based on count
  React.useEffect(() => {
    if (count > 0) {
      setColor("#27ae60"); // Green for positive
    } else if (count < 0) {
      setColor("#e74c3c"); // Red for negative
    } else {
      setColor("#3498db"); // Blue for zero
    }
  }, [count]);

  const handleIncrement = () => {
    if (count >= 5) {
      setError("Cannot increment above 5!");
      return;
    }
    setCount(count + 1);
    setError("");
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setError("Cannot decrement below 0!");
      return;
    }
    setCount(count - 1);
    setError("");
  };

  const handleReset = () => {
    setCount(0);
    setError("");
  };

  return (
    <DemoContainer>
      <Divider />
      <Title color={color}>Hooks Counter Example</Title>
      
      <CounterDisplay color={color}>
        Counter Value: {count}
      </CounterDisplay>
      
      <ButtonGroup>
        <Button 
          onClick={handleIncrement}
          disabled={count >= 5}
        >
          Increment
        </Button>
        <Button 
          onClick={handleDecrement}
          disabled={count <= 0}
        >
          Decrement
        </Button>
        <ResetButton onClick={handleReset}>
          Reset
        </ResetButton>
      </ButtonGroup>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <Divider />
    </DemoContainer>
  );
}

export default HookCounter;