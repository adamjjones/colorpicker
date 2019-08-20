import React, { Component } from 'react'

export class Hsl extends Component {
  state = {
    hue: 0,
    saturation: 0,
    brightness: 0
  }

  changeHue = event => {
    console.log('It works')
    console.log(event)
    this.setState({
      hue: event.target.value
    })
  }

  changeSat = event => {
    console.log('It works')
    console.log(event)
    this.setState({
      saturation: event.target.value
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
        <input type="range" min="0" max="255" onChange={this.changeHue} />
        {this.state.hue}
        <input type="range" min="0" max="255" onChange={this.changeSat} />
        {this.state.saturation}
        <input type="range" min="0" max="255" onChange={this.changeLight} />
        {this.state.brightness}
        <div
          className="colordisplay"
          style={{
            backgroundColor: `Hsl(${this.state.hue}, ${
              this.state.saturation
            }%, ${this.state.brightness}%)`
          }}
        />
      </div>
    )
  }
}

export default Hsl
