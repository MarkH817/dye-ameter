import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
      <Palette key={item.id} id={item.id} title={item.title} colors={item.colors} />
    ))

    return (
      <div>
        <h2>Home</h2>
        <Link className='button' to='/new'>Create New Palette</Link>

        {palettes}
      </div>
    )
  }
}
