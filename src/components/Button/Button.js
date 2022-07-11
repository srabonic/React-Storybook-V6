import './Button.css'

import React from 'react'

function Button(props) {
  const {variant= 'primary', children, ...rest} = props
  return (
    <button className={`button ${variant}`} {...rest}>{children}</button>
  )
}

export default Button
