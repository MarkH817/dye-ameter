import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Palette} from '../components'
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

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleSubmit (event) {
    db.removePalette(this.state.id)
      .then(result => {
        this.setState({
          isRemoved: true
        })
      })
  }

  handleCancel (event) {
    this.setState({
      isRemoved: true
    })
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
        {!this.state.isRemoved ? null : <Redirect to='/' />}
        <h2>
          Remove Palette
          <small>Are you sure?</small>
        </h2>

        <Palette title={this.state.title} colors={this.state.colors} />

        <p className='align-right'>
          <button className='secondary' onClick={this.handleSubmit}>
            Yes, I'm sure
          </button>
          <button onClick={this.handleCancel}>
            Cancel
          </button>
        </p>
      </div>
    )
  }
}
