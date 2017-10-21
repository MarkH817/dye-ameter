import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {db} from '../utils'

export default class NewPalette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSaved: false,
      title: '',
      'color-1': '#D3061E',
      'color-2': '#D3061E',
      'color-3': '#D3061E',
      'color-4': '#D3061E',
      'color-5': '#D3061E'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const {target} = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    console.log(JSON.stringify(this.state))

    if (this.state.title.trim() === '') {
      console.log('No Title')
      return
    }

    let colors = []

    for (let i = 1; i <= 5; i++) {
      let color = this.state[`color-${i}`].split('#').join('')
      colors.push(color)
    }

    let data = {
      id: Number(Date.now()),
      title: this.state.title.trim(),
      colors
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

    for (let i = 1; i <= 5; i++) {
      let name = `color-${i}`
      colorInputs.push((
        <div key={i} className='input-group fluid'>
          <label>
            Color {i}
          </label>

          <input type='color' name={name} value={this.state[name]} onChange={this.handleChange} />
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
            <input type='text' id='p-title' name='title' value={this.state.title} onChange={this.handleChange} />
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
