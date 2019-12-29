import React from 'react'

import View from 'lib/components/layout/View'

export const AppStoreDownload = props => {
  const {
    url,
    ...rest
  } = props

  return (
    <View {...rest}>
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Download on the App Store"
          src="appstore.svg"
        />
      </a>
    </View>
  )
}

export default AppStoreDownload
