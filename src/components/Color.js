import React, {Component} from 'react'

export default class Color extends Component {
  render () {
    let bgStyle = {
      backgroundColor: `#${this.props.value}`
    }

    let textStyle = {
      backgroundColor: 'rgba(255, 255, 255, .6)',
      margin: '.25em',
      padding: '.125em .5'
    }

    return (
      <button style={bgStyle}>
        <section style={textStyle}>
          #{this.props.value.toUpperCase()}
        </section>
      </button>
    )
  }
}
