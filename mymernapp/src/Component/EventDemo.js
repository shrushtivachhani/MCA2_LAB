import React from 'react';
import styled from 'styled-components';

// Styled components
const EventDemoContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const DemoTitle = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
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

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
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
`;

const EventLog = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
`;

const LogTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const LogEntry = styled.p`
  color: #34495e;
  margin: 0.3rem 0;
  padding: 0.3rem;
  border-bottom: 1px solid #eee;
`;

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      eventLog: []
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      eventLog: [...this.state.eventLog, 
        `Input ${e.target.name} changed to: ${e.target.value} (${e.type})`]
    });
  };

  handleClick = (e) => {
    this.setState({
      eventLog: [...this.state.eventLog, 
        `Button clicked: ${e.target.value} (${e.type})`]
    });
  };

  handleFocus = (e) => {
    this.setState({
      eventLog: [...this.state.eventLog, 
        `Input ${e.target.name} focused (${e.type})`]
    });
  };

  handleBlur = (e) => {
    this.setState({
      eventLog: [...this.state.eventLog, 
        `Input ${e.target.name} blurred (${e.type})`]
    });
  };

  clearLog = () => {
    this.setState({ eventLog: [] });
  };

  render() {
    return (
      <EventDemoContainer>
        <DemoTitle>Event Handling Demo</DemoTitle>
        
        <InputGroup>
          <StyledInput
            type="text"
            name="text1"
            placeholder="Type something..."
            value={this.state.input1}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <StyledInput
            type="text"
            name="text2"
            placeholder="Type something..."
            value={this.state.input2}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </InputGroup>
        
        <ButtonGroup>
          <StyledButton 
            value="Action Button 1" 
            onClick={this.handleClick}
          >
            Action Button 1
          </StyledButton>
          <StyledButton 
            value="Action Button 2" 
            onClick={this.handleClick}
          >
            Action Button 2
          </StyledButton>
          <StyledButton 
            onClick={this.clearLog}
            style={{ backgroundColor: '#e74c3c' }}
          >
            Clear Log
          </StyledButton>
        </ButtonGroup>
        
        <EventLog>
          <LogTitle>Event Log:</LogTitle>
          {this.state.eventLog.length > 0 ? (
            this.state.eventLog.map((entry, index) => (
              <LogEntry key={index}>{entry}</LogEntry>
            ))
          ) : (
            <LogEntry>No events logged yet. Interact with the inputs and buttons.</LogEntry>
          )}
        </EventLog>
      </EventDemoContainer>
    );
  }
}

export default EventDemo;