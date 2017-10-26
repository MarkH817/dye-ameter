import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
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

    this.titleChange = this.titleChange.bind(this)
    this.colorChange = this.colorChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
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
      id: this.state.id,
      title: this.state.title.trim(),
      colors: this.state.colors
    }

    db.updatePalette(data)
      .then(result => {
        this.setState({
          isSaved: true
        })
      })
  }

  handleCancel (event) {
    this.setState({
      isSaved: true
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

        <h2>Edit Palette</h2>

        <form>
          <div className='input-group vertical'>
            <label htmlFor='p-title'>
              Title
            </label>
            <input type='text' id='p-title' name='title' value={this.state.title} onChange={this.titleChange} />
          </div>

          <legend>Colors</legend>

          {colorInputs}

          <p className='align-right'>
            <button className='primary' onClick={this.handleSubmit}>
              Update
            </button>

            <button onClick={this.handleCancel}>
              Cancel
            </button>
          </p>
        </form>
      </div>
    )
  }
}
