import React, {Component} from 'react'
import {Link, HashRouter as Router, Route} from 'react-router-dom'
import {Home, NewPalette} from './containers'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/new'>Create Palette</Link>
          </nav>

          <main>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={NewPalette} />
          </main>
        </div>
      </Router>
    )
  }
}
