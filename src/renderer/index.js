import React, {Component} from 'react'
import {render} from 'react-dom'
import {notify} from './utils'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>Hi</h1>

        <button onClick={(event) => {
          notify(event, 'hello')
          console.log(event)
        }}>
          Hello
        </button>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
