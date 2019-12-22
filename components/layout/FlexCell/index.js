import React from 'react'

export const FlexCellWeb = props => (
  <div
    style={{
      alignItems: props.alignItems || 'center',
      flex: 1,
      display: 'flex',
      justifyContent: props.justifyContent || 'center',
      flexDirection: 'column',
    }}
  >
    { props.children }
  </div>
)

export default FlexCellWeb
