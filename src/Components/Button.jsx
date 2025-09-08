import React from 'react'

const Button = ({className,text}) => {
  return (
  <div className={`${className}`}>{text}</div>
  )
}

export default Button