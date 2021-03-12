import React from 'react'

import View from 'lib/components/layout/View'


export const ViewSourceOnGitHub = props => {
  const {
    url,
    ...rest
  } = props

  return (
    <View
      {...rest}
      style={{
        fontSize: 14,
        position: 'absolute',
        bottom: 50,
        opacity: .5,
        textAlign: 'center'
      }}
    >
      <a
        href={url}
        style={{
          color: '#fff',
          textDecoration: 'none',
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        view source on
        <br />
        <img
          alt="GitHub"
          src="ghmark.png"
          style={{
            height: 25,
            marginTop: 5,
            width: 25,
          }}
        />
        <img
          alt="GitHub"
          src="ghlogo.png"
          style={{
            height: 25,
            marginLeft: 5,
          }}
        />
      </a>
    </View>
  )
}

export default ViewSourceOnGitHub
