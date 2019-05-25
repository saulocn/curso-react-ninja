'use strict'
import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ onSave }) => (
    <header className='editor-header'>
        <button onClick={onSave} className='save'>Salvar</button>
    </header>
)

MarkdownEditorHeader.protoTypes = {
    onSave: PropTypes.func.isRequired,
}

export default MarkdownEditorHeader
