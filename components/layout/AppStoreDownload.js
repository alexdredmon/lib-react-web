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
        target="_blank"
      >
        <img src="appstore.svg" />
      </a>
    </View>
  )
}

export default AppStoreDownload
