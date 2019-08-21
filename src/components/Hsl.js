import React, { Component } from 'react'

export class Hsl extends Component {
  state = {
    hue: 0,
    saturation: 0,
    brightness: 0,
    alpha: 0
  }

  changeHue = event => {
    console.log(event)
    this.setState({
      hue: event.target.value
    })
  }

  changeAlpha = event => {
    this.setState({
      alpha: event.target.value
    })
  }

  changeSat = event => {
    console.log('It works')
    console.log(event)
    this.setState({
      saturation: event.target.value
    })
  }

  displayCode = event => {
    this.setState({
      hue: this.value
    })
  }

  changeLight = event => {
    console.log('It works')
    console.log(event)
    this.setState({
      brightness: event.target.value
    })
  }

  render() {
    return (
      <div className="sliders">
        <h1>HSL Color Picker</h1>
        <span>Hue: </span>
        {this.state.hue}
        <input
          type="range"
          value={this.state.value}
          min="0"
          max="360"
          onChange={this.changeHue}
        />
        <span>Saturation: </span>
        {this.state.saturation}
        <input
          type="range"
          value={this.state.value}
          min="0"
          max="100"
          onChange={this.changeSat}
        />
        <span>Lightness</span>
        {this.state.brightness}
        <input
          type="range"
          value={this.state.value}
          min="0"
          max="100"
          onChange={this.changeLight}
        />
        <span>Alpha: </span>
        {this.state.alpha}
        <input
          type="range"
          value={this.state.value}
          min="0"
          max="100"
          onChange={this.changeAlpha}
        />
        <div
          className="colordisplay"
          onClick={this.randomColor}
          style={{
            backgroundColor: `Hsl(${this.state.hue.value}, ${
              this.state.saturation
            }%, ${this.state.brightness}%, ${this.state.alpha}%),`
          }}
        />
        <p>
          hsla: ({this.state.hue}, {this.state.saturation}%{' '}
          {this.state.brightness}% {this.state.alpha}%)
        </p>
      </div>
    )
  }
}

export default Hsl
