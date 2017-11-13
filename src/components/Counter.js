import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {

  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h4>in counter {this.state.counter}</h4>
        <button className="counter-btn" onClick={this.handleClick}>Counter</button>
      </div>
    );
  }
}

export default Counter;