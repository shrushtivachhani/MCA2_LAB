import React, { Component } from "react";
import styled from 'styled-components';

// Styled components
const CounterContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
`;

const CounterTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const CounterValue = styled.span`
  display: inline-block;
  min-width: 2.5rem;
  font-weight: bold;
  color: ${props => {
    if (props.count > 0) return '#27ae60'; // Green for positive
    if (props.count < 0) return '#e74c3c'; // Red for negative
    return '#3498db'; // Blue for zero
  }};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const CounterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.primary ? '#3498db' : '#e74c3c'};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;

  &:hover {
    background-color: ${props => props.primary ? '#2980b9' : '#c0392b'};
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

const AlertMessage = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #fef9e7;
  color: #f39c12;
  border-radius: 4px;
  display: ${props => props.show ? 'block' : 'none'};
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Number(localStorage.getItem("count")) || 0,
      showAlert: false,
      alertMessage: ""
    };
  }

  updateLocalStorage = (newCount) => {
    localStorage.setItem("count", newCount);
  };

  showAlert = (message) => {
    this.setState({ showAlert: true, alertMessage: message });
    setTimeout(() => {
      this.setState({ showAlert: false, alertMessage: "" });
    }, 3000);
  };

  increment = () => {
    if (this.state.count < 5) {
      const newCount = this.state.count + 1;
      this.setState({ count: newCount });
      this.updateLocalStorage(newCount);
    } else {
      this.showAlert("Maximum count reached (5)!");
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount });
      this.updateLocalStorage(newCount);
    } else {
      this.showAlert("Minimum count reached (0)!");
    }
  };

  render() {
    return (
      <CounterContainer>
        <CounterTitle>
          Counter: <CounterValue count={this.state.count}>{this.state.count}</CounterValue>
        </CounterTitle>
        
        <ButtonGroup>
          <CounterButton 
            onClick={this.increment} 
            disabled={this.state.count === 5}
            primary
          >
            Increment
          </CounterButton>
          <CounterButton 
            onClick={this.decrement} 
            disabled={this.state.count === 0}
          >
            Decrement
          </CounterButton>
        </ButtonGroup>

        <AlertMessage show={this.state.showAlert}>
          {this.state.alertMessage}
        </AlertMessage>
      </CounterContainer>
    );
  }
}

export default Counter;