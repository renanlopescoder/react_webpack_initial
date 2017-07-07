import React from 'react'

function listWithProps(children, props) {
  return React.Children.map(props.children, child => React.cloneElement(child, {...props}))
}

export { listWithProps }