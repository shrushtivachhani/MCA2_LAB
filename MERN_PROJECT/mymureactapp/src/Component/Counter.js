import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: Number(localStorage.getItem("count")) || 0,
    };
  }

  updateLocalStorage = (newCount) => {
    localStorage.setItem("count", newCount);
  };

   increment = () => {
    if (this.state.count < 5) {
      const newCount = this.state.count + 1;
      this.setState({ count: newCount });
      this.updateLocalStorage(newCount);
    } else {
      alert("Maximum count reached!");
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount });
      this.updateLocalStorage(newCount);
    } else {
      alert("Minimum count reached!");
    }
  };
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment} disabled={this.state.count === 5}>
          Increment
        </button>
        <button onClick={this.decrement} disabled={this.state.count === 0}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;