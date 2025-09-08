import React, { Children } from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`max-w-mContainer ${className}`}>{children}</div>
  )
}

export default Container