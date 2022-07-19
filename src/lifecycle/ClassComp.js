import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };

    console.log("constructor call");
  }

  componentDidMount() {
    console.log("componentDidMount call");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate call", prevProps, prevState);
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <h2 onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          +
        </h2>
      </div>
    );
  }
}
