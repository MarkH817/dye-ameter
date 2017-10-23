import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {db} from '../utils'

export default class NewPalette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSaved: false,
      title: '',
      colors: [
        'D3061E',
        'D3061E',
        'D3061E',
        'D3061E',
        'D3061E'
      ]
    }

    this.titleChange = this.titleChange.bind(this)
    this.colorChange = this.colorChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  titleChange (event) {
    this.setState({
      title: event.target.value
    })
  }

  colorChange (event) {
    let {name, value} = event.target
    name = Number(name)
    value = value.split('#').join('')

    let updatedList = this.state.colors.map((item, index) => {
      if (index === name) {
        return value
      }
      return item
    })

    this.setState({
      colors: updatedList
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    if (this.state.title.trim() === '') {
      console.log('No Title')
      return
    }

    let data = {
      id: Number(Date.now()),
      title: this.state.title.trim(),
      colors: this.state.colors.map(value => value.toUpperCase())
    }

    db.savePalette(data)
      .then(result => {
        this.setState({
          isSaved: true
        })
      })
  }

  render () {
    let colorInputs = []

    for (let i = 0; i < 5; i++) {
      let name = `${i}`
      let value = `#${this.state.colors[name]}`

      colorInputs.push((
        <div key={i} className='input-group fluid'>
          <label>
            Color {i + 1}
          </label>

          <input type='color' name={name} value={value} onChange={this.colorChange} />
        </div>
      ))
    }

    return (
      <div>
        {!this.state.isSaved ? null : <Redirect to='/' />}

        <h2>Create New Palette</h2>

        <form onSubmit={this.handleSubmit}>
          <div className='input-group vertical'>
            <label htmlFor='p-title'>
              Title
            </label>
            <input type='text' id='p-title' name='title' value={this.state.title} onChange={this.titleChange} />
          </div>

          <legend>Colors</legend>

          {colorInputs}

          <button className='primary'>
            Save
          </button>
        </form>
      </div>
    )
  }
}
