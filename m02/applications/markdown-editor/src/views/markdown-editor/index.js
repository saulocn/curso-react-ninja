'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Files from './files'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef,
  files, handleOpenFile, ...props }) => (
  <section className='editor'>
      <Header {...props} />
      <Files files={files} handleOpenFile={handleOpenFile} />
      <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />
      <article className='view' dangerouslySetInnerHTML={getMarkup()} />
    </section>
)

MarkdownEditor.protoTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
