import React, { Component } from "react";

export default class Starship extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}: {this.props.model}</p>
      </div>
    );
  }
}
