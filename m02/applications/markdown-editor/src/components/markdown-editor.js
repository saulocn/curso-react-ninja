'use strict'
import React, { PropTypes } from 'react'
import Header from './markdown-editor-header'

const MarkdownEditor = ({ value, handleChange, getMarkup, isSaving, handleRemove }) => (
  <section className='editor'>
    <Header isSaving={isSaving} handleRemove={handleRemove} />
    <textarea value={value} onChange={handleChange} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.protoTypes = {
  value: PropTypes.string.isRequired,
  isSaving: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
