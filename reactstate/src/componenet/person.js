import React, { Component } from "react";

export default class person extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p> {this.props.fullName} </p>
        <p>{this.props.bio}</p>
        <p>{this.props.profession}</p>
      </div>
    );
  }
}
