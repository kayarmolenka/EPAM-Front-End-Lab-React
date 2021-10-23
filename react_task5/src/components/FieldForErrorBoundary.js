import { Component } from "react";

class FieldForErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }
    return (
      <>
        <h1>Get to 5</h1>
        <h2 onClick={this.handleClick}>{this.state.counter}</h2>
      </>
    );
  }
}

export default FieldForErrorBoundary;
