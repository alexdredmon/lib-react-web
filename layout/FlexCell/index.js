import React from 'react'
import classNames from 'classnames'

import './styles.css'


const alignMap = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  left: 'flex-start',
  right: 'flex-end',
}

class FlexCell extends React.Component {
  static defaultProps = {
    align: 'center',
    flex: 1,
    valign: 'center',
  }
  
  render = () => {
    const { align, children, className, flex, valign } = this.props
    return (
      <div
        className={classNames(
          'flex-cell',
          className,
        )}
        style={{
          flex: flex,
          alignItems: alignMap[valign],
          justifyContent: align[align],
        }}
      >
        <div style={{ width: '100%', display: 'block'}}>
          { children }
        </div>
      </div>
    )
  }
}

export default FlexCell
