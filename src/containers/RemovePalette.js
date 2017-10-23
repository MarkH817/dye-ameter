import React, {Component} from 'react'
import {db} from '../utils'

export default class RemovePalette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isRemoved: false,
      id: Number(props.match.params.id),
      title: '',
      colors: []
    }
  }

  componentDidMount () {
    db.loadPalette(this.state.id)
      .then(palette => {
        this.setState({
          title: palette.title,
          colors: palette.colors
        })
      })
  }

  render () {
    return (
      <div>
        <h2>
          Remove Palette
          <small>Confirmation</small>
        </h2>

        <p>Are you sure?</p>
      </div>
    )
  }
}
