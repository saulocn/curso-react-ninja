'use strict'
import React, { PropTypes } from 'react'
import Header from './markdown-editor-header'

const MarkdownEditor = ({ value, handleChange, getMarkup, handleSave }) => (
  <section className='editor'>
    <Header onSave={ handleSave } />
    <textarea value={value} onChange={handleChange} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.protoTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
