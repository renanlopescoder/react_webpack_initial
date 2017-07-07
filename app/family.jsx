import React from 'react'
import { listWithProps } from '../service/reactServices'

export default props => (
  <div>
    {
      listWithProps(props.children, props)
    }
  </div>
)