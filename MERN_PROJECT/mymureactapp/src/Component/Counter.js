import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    if (this.state.count < 5) {
      this.setState({ count: this.state.count + 1 });
    } else {
      alert("Maximum count reached!");
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
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