import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  state = { number: 1 };

  constructor(props) {
    super(props);

    // console.log("contructor parent");
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    // console.log("getDerivedStateFromProps parent");

    // if(true){
    //     currentState.number = 10
    // }
    return currentState;
  }

  render() {
    // console.log("render parent");

    return (
      <div className="bg-warning w-75 text-center mx-auto p-5">
        <h4>Parent</h4>
        <button
          onClick={() => this.setState({ number: this.state.number-- })}
          className="btn btn-primary mr-2"
        >
          Descrease
        </button>
        <button
          onClick={() => this.setState({ number: this.state.number++ })}
          className="btn btn-success mr-2"
        >
          Increase
        </button>
        <Child number={this.state.number} />
      </div>
    );
  }

  componentDidMount() {
    // this.setState({
    //   number: 2,
    // });
    // console.log("componentDidMount Parent");
  }
}
