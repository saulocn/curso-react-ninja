'use strict'
import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ isSaving, handleRemove }) => (
    <header className='editor-header'>
        <p className='save-message'>{ !isSaving ? 'Salvo!' : 'Salvando ...' }</p>
        <button onClick={handleRemove}>Remover</button>
    </header>
)

MarkdownEditorHeader.protoTypes = {
    isSaving: PropTypes.bool.isRequired,
    handleRemove: PropTypes.func.isRequired,
}

export default MarkdownEditorHeader
