import React from 'react'


export const TextWeb = props => {
  const {
    children,
    fontSize=16,
    style,
  } = props

  return (
    <span style={{
      ...style,
    }}>
      { children }
    </span>
  )
}

export default TextWeb
