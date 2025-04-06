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


const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputLabel = styled.label`
  width: 100px;
  font-weight: 500;
`;

const InputField = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
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

const SumButton = styled(Button)`
  background-color: #2ecc71;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #27ae60;
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

const ResultDisplay = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  text-align: center;
  font-size: 1.2rem;
`;

function HookSum() {

  const [color, setColor] = React.useState("#3498db");
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState({});
  const [sum, setSum] = React.useState(null);

  // Change color based on count


 

  const calculateSum = () => {
    const n1 = parseFloat(data.Num1);
    const n2 = parseFloat(data.Num2);
    setSum(n1 + n2);
    setError("");
  };

  return (
    <DemoContainer>
      <Divider />
      <Title color={color}>Hooks Sum Example</Title>

      <InputGroup>
        <InputRow>
          <InputLabel>Number 1:</InputLabel>
          <InputField 
            type="number"
            value={data.Num1}
            onChange={(e) => setData({...data,Num1 : e.target.value})}
            placeholder="Enter first number"
          />
        </InputRow>
        <InputRow>
          <InputLabel>Number 2:</InputLabel>
          <InputField 
            type="number"
            value={data.Num2}
            onChange={(e) => setData({...data,Num2 : e.target.value})}
            placeholder="Enter second number"
          />
        </InputRow>
        <SumButton onClick={calculateSum}>
          Calculate Sum
        </SumButton>
      </InputGroup>

      {sum !== null && (
        <ResultDisplay>
          The sum of {data.Num1} and {data.Num2} is: <strong>{sum}</strong>
        </ResultDisplay>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <Divider />
    </DemoContainer>
  );
}

export default HookSum;