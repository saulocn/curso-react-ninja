'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            text: 'Saulo'
        }
    }
    render() {
        return (
            <div className='container' onClick={() =>
                this.setState({
                    text: 'Mudou o estado!'
                })} >
                {this.state.text}
            </div>
        )
    }
}

export default App