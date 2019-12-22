import React from 'react'

import styles from './styles.css'


export const BodyWeb = props => (
  <div
    style={{
      fontFamily: 'helvetica, sans-serif',
      height: 'calc(100vh - 80px)',
    }}
  >
    {props.children}
  </div>
)

export default BodyWeb
