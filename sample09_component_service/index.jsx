import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family lastName='Lopes'>
    <Member name='Renan' />
    <Member name='Marcelo' />
  </Family>
  , document.getElementById('app')
)