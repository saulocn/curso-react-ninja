'use strict'

import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import marked from 'marked'
import MarkdownEditor from 'views/markdown-editor'

import './css/style.css'

import('highlight.js')
  .then(hljs => {
    marked.setOptions({
      highlight: (code, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code).value
        }
        return hljs.highlightAuto(code).value
      }
    })

  })


class App extends Component {
  constructor() {
    super()

    this.clearState = () => ({
      value: '',
      title: '',
      id: v4(),
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.handleOpenFile = fileId => () => {
      this.setState({
        value: this.state.files[fileId].content,
        title: this.state.files[fileId].title,
        id: fileId
      })
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleChange = (field) => e => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        const newFile = {
          title: this.state.title || 'Sem Título',
          content: this.state.value
        }
        localStorage.setItem(this.state.id, JSON.stringify(newFile))
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: newFile
          }
        })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      /*let files = Object.keys(this.state.files).reduce((acc, fileId) => {
        return fileId === this.state.id ? acc : {
          ...acc,
          [fileId]: this.state.files[fileId]
        }
      }, {})
      delete files[this.state.id]
      */
      // eslint-disable-next-line no-unused-vars
      const { [this.state.id]: id, ...files } = this.state.files

      this.setState({ files })
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = node => {
      this.textarea = node
    }

  }

  componentDidMount() {
    const files = Object.keys(localStorage)
    this.setState({
      files: files.filter(id => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)).reduce((acc, fileId) => ({
        ...acc,
        [fileId]: JSON.parse(localStorage.getItem(fileId))
      }), {})
    })
  }

  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 300)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title}
      />
    )
  }
}
export default App
