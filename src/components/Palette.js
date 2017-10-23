import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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

    let editUrl = `/edit/${this.props.id}`
    let deleteUrl = `/delete/${this.props.id}`

    return (
      <section className='palette card fluid'>
        <h3>
          {this.props.title}
        </h3>

        <section className='button-group'>
          {colors}
        </section>

        <p className='align-right'>
          <Link className='button small' to={editUrl}>Edit</Link>
          <Link className='button small' to={deleteUrl}>Delete</Link>
        </p>
      </section>
    )
  }
}
