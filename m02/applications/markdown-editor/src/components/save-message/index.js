'use strict'

import React, { PropTypes } from 'react'

const SaveMessage = ({ isSaving }) => (
    isSaving !== null && isSaving !== undefined && (
    <p className='save-message'>
        {!isSaving ? 'Salvo!' : 'Salvando ...'}
    </p>
    )
)

SaveMessage.protoTypes = {
    isSaving: PropTypes.bool,
}

export default SaveMessage