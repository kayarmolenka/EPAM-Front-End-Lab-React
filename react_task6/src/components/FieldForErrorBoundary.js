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
      <div className="wrapper-error--bondary">
        <h1>Realization Error Boundary </h1>
        <h2>Get to 5. Click on number.</h2>
        <h3 onClick={this.handleClick}>{this.state.counter}</h3>
      </div>
    );
  }
}

export default FieldForErrorBoundary;
