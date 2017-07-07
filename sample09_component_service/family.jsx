import React from 'react'
import { listWithProps } from '../utils/reactUtils'

export default props => (
  <div>
    {
      listWithProps(props.children, props)
    }
  </div>
)