import React, {Component} from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 1
    }

    this.handleHello = this.handleHello.bind(this)
  }

  handleHello (e) {
    console.log(e)

    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  repeat () {
    return '!'.repeat(this.state.count)
  }

  render () {
    return (
      <div>
        <h1>Hi{this.repeat()}</h1>

        <button onClick={this.handleHello}>
          Hello
        </button>
      </div>
    )
  }
}
