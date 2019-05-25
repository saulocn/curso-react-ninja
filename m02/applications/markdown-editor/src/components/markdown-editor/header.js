'use strict'
import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
    <header className='editor-header'>
        <p className='save-message'>{ !isSaving ? 'Salvo!' : 'Salvando ...' }</p>
        <button onClick={handleCreate} className=''>Criar Novo</button>
        <button onClick={handleRemove} className='button-remove'>Remover</button>
    </header>
)

MarkdownEditorHeader.protoTypes = {
    isSaving: PropTypes.bool.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleCreate: PropTypes.func.isRequired,
}

export default MarkdownEditorHeader
