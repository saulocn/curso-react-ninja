'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && isSaving !== undefined && (
    <p className='save-message'>
      {!isSaving ? 'Salvo!' : 'Salvando ...'}
    </p>
  )
)

SaveMessage.protoTypes = {
  isSaving: PropTypes.bool
}

export default SaveMessage
