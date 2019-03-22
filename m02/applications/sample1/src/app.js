'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  incrementCounter (state) {
    return {
      counter: state.counter + 1
    }
  }
  incrementCounter2 (state) {
    return {
      counter: state.counter + 2
    }
  }

  componentDidMount() {
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter2)
    /*this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
    */
   
   /* this.setState({ counter: this.state.counter + 1 }, () => {
      this.setState({ counter: this.state.counter + 1 })
    })*/
  }
  render() {
    console.log(this.state)
    const { counter } = this.state
    return (
      <div>
        Counter: {counter}
      </div>
    )
  }
}

export default App
