import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {db} from './utils'

const defaults = [
  {
    id: 0,
    title: 'Autumn Werewolf',
    colors: [
      'D3061E',
      'E1EAF2',
      '992D18',
      'F46E00',
      '3F033D'
    ]
  },
  {
    id: 1,
    title: 'Lovely Thing',
    colors: [
      '080F2B',
      '132F3A',
      '6ED79F',
      'E3D7C1',
      'DA3C6C'
    ]
  },
  {
    id: 2,
    title: 'Headache',
    colors: [
      '655643',
      '80BCA3',
      'F6F7BD',
      'E6AC27',
      'BF4D28'
    ]
  }
]

db.load('palettes')
  .then(result => {
    if (result === null) {
      db.save('palettes', defaults)
    }
    render(<App />, document.getElementById('root'))
  })
