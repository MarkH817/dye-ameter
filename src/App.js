import React, {Component} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Home, NewPalette, EditPalette, RemovePalette} from './containers'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='col-sm-12 col-md-12 col-lg-10 col-lg-offset-1'>
          <Route exact path='/' component={Home} />
          <Route path='/new' component={NewPalette} />
          <Route path='/edit/:id' component={EditPalette} />
          <Route path='/delete/:id' component={RemovePalette} />
        </div>
      </Router>
    )
  }
}
