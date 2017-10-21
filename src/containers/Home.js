import React, {Component} from 'react'
import {Palette} from '../components'
import {db} from '../utils'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      palettes: []
    }
  }

  componentDidMount () {
    db.loadAllPalettes()
      .then(palettes => {
        this.setState({
          palettes: palettes
        })
      })
  }

  render () {
    let palettes = this.state.palettes.map(item => (
      <Palette key={item.id} title={item.title} colors={item.colors} />
    ))

    return (
      <div>
        <h2>Home</h2>
        {palettes}
      </div>
    )
  }
}
