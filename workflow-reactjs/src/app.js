'use strict'

import React, { Component } from 'react'
import Title from 'components/title/index'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: '...'
    }
  }
  getTitle () {
    return new Promise((resolve, reject) => {
      this.timer = setTimeout(() => {
        resolve('My App with async / await')
      }, 2000)
    })
  }

  async componentDidMount () {
    try {
      this.setState({ title: await this.getTitle() })
    } catch (e) { }
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    return (
      <div>
        <Title>{this.state.title}</Title>
      </div>
    )
  }
}

export default App
