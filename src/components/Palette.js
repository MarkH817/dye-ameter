import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Color from './Color'

export default class Palette extends Component {
  render () {
    let colors = this.props.colors.map((color, index) => (
      <Color key={index} value={color} />
    ))

    let editUrl = `/edit/${this.props.id}`
    let deleteUrl = `/delete/${this.props.id}`
    let controls = null

    if (this.props.showControls) {
      controls = (
        <p className='align-right'>
          <Link className='button' to={editUrl}>Edit</Link>
          <Link className='button' to={deleteUrl}>Delete</Link>
        </p>
      )
    }

    return (
      <section className='palette card fluid'>
        <h3>
          {this.props.title}
        </h3>

        <section className='button-group'>
          {colors}
        </section>

        {controls}
      </section>
    )
  }
}
