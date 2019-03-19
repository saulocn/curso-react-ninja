'use strict'

import React, { Component } from 'react'
import Title from 'components/title/index'

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '...'
    }
  }
  getTitle() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My App with Promise')
      }, 2000)
    })
  }
  componentDidMount() {
    this.getTitle()
      .then(title => {
        this.setState({
          title
        })
      })
  }
  render() {
    return (
      <div>
        <Title>{this.state.title}</Title>
      </div>
    )
  }
}

export default App
