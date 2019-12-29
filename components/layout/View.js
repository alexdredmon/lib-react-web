import React from 'react'


export const ViewWeb = props => {
  const {
    children,
    onClick,
    style,
    ...rest
  } = props

  return (
    <div
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : null,
        ...style,
      }}
      {...rest}
    >
      { children }
    </div>
  )
}

export default ViewWeb
