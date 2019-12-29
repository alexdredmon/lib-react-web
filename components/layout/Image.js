import React from 'react'


export const Image = props => {
  const  {
    alt,
    srcMobile,
    srcWeb,
    ...rest
  } = props

  return (
    <img
      alt={alt}
      src={srcWeb}
      {...rest}
    />
  )
}

export default Image
