import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component'

ReactDOM.render(
  <div>
    <Primeiro value="Show 1"/>
    <Segundo value="Show 2" />
  </div>,
  document.getElementById('app'))