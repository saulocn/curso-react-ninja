'use strict'
import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ isSaving }) => (
    <header className='editor-header'>
        <p className='save-message'>{ !isSaving ? 'Salvo!' : 'Salvando ...' }</p>
    </header>
)

MarkdownEditorHeader.protoTypes = {
    isSaving: PropTypes.bool.isRequired,
}

export default MarkdownEditorHeader
