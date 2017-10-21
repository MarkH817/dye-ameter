import React, {Component} from 'react'
import Color from './Color'

export default class Palette extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    let colors = this.props.colors.map((color, index) => (
      <Color key={index} value={color} />
    ))

    return (
      <section className='palette card fluid'>
        <h3>
          {this.props.title}
        </h3>

        <section className='button-group'>
          {colors}
        </section>
      </section>
    )
  }
}
