import React from 'react'

const Image = ({imgalt,imgSrc,className}) => {
  return (
   <img className={`${className}`} src={imgSrc} alt={imgalt} />
  )
}

export default Image