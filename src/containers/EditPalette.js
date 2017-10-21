import React, {Component} from 'react'
import {Palette} from '../components'
import {db} from '../utils'

export default class EditPalette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSaved: false,
      id: Number(props.match.params.id),
      title: '',
      colors: []
    }
  }

  componentDidMount () {
    console.log(this.state.id)
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
        {!this.state.isSaved ? null : <Redirect to='/' />}

        <h2>Edit Palette</h2>

        <Palette id={this.state.id} title={this.state.title} colors={this.state.colors} />
      </div>
    )
  }
}
