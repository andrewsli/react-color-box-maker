import React, { Component } from "react";

class NewBoxForm extends Component {

  constructor(props) {
    super(props);
    this.state = { width: '', height: '', backgroundColor: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //calls addBox parent function with submitted input, reset state
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addNewBox({
      width: `${this.state.width}px`,
      height: `${this.state.height}px`,
      backgroundColor: this.state.backgroundColor
    });
    this.setState({ width: '', height: '', backgroundColor: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="height">Height (in px):</label>
        <input name="height" id="height" value={this.state.height} onChange={this.handleChange} />

        <label htmlFor="width">Width (in px):</label>
        <input name="width" id="width" value={this.state.width} onChange={this.handleChange} />

        <label htmlFor="backgroundColor">BackgroundColor:</label>
        <input name="backgroundColor" id="backgroundColor" value={this.state.backgroundColor} onChange={this.handleChange} />
        <button>Add box!</button>
      </form>
    )
  }
}

export default NewBoxForm;