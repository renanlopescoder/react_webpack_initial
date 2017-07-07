import React from 'react'
import ReactDOM from 'react-dom'
import First, { Second } from './component'

ReactDOM.render(
  <div>
    <First value="Default Component"/>
    <Second value="Secondary Component" />
  </div>,
  document.getElementById('app'))