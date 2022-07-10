import React, { Component } from "react";

export default class Child extends Component {
  state = {};

  constructor(props) {
    super(props);

    console.log("contructor Child");
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps Child");

    return currentState;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate child");
    return true;
  }
  render() {
    console.log("render Child");

    return (
      <div className="bg-light w-75 text-center mx-auto p-5">
        <h4>Child</h4>
        <p>{this.props.number}</p>
      </div>
    );
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("getSnapshotBeforeUpdate child");
    return true;
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("componentDidUpdate child");
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount Child");
  }
}
