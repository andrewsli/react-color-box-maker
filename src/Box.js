import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.removeBox = this.removeBox.bind(this);
  }

  //call parent removeBox function, pass in current box ID
  removeBox() {
    this.props.removeThisBox(this.props.id)
  }

  render() {
    let { height, width, backgroundColor } = this.props;
    let styles = { height, width, backgroundColor, margin: "3px", display: "inline-block"}
    return (
      <div>
        <div style={styles} className="box">
        </div>
        <button onClick={this.removeBox}>X</button>
      </div>

    )
  }
}


export default Box;