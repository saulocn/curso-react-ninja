'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import css from 'strclass'
import './button.css'

const Button = ({ onClick, children, kind }) => (
  <button onClick={onClick} className={
    css({
      '-success': kind === 'success',
      '-danger': kind === 'danger'
    }, 'button')}>
    {children}
  </button>
)

Button.defaultProps = {
  kind: ''
}

Button.protoTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
}

export default Button
