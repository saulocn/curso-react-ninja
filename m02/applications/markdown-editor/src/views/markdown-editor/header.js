'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ title, isSaving, handleRemove, handleCreate, handleChange }) => (
  <header className='editor-header'>
    <SaveMessage isSaving={isSaving} />
    <input type='text' value={title} placeholder='Sem Título' onChange={handleChange('title')} />

    <Button onClick={handleCreate} kind='success'>
      Criar Novo
    </Button>

    <Button onClick={handleRemove} kind='danger'>
      Remover
    </Button>
  </header>
)

MarkdownEditorHeader.protoTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
