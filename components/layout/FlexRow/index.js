import React from 'react'
import classNames from 'classnames'

import './styles.css'

class FlexRow extends React.Component {
  render = () => {
    const {
      children,
      className,
      ...rest
    } = this.props

    return (
      <div
        className={classNames(
          'flex-row',
          className,
        )}
        {...rest}
      >
        { children }
      </div>
    )
  }
}

export default FlexRow
