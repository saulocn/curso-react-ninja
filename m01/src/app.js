'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
    constructor(){
        super()
        console.log('constructor')
        this.state = {
            showTimer : true
        }
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillUnmount
    render() {
        console.log('render')
        return (
            <div>
                { this.state.showTimer && <Timer /> }
                <button onClick={()=>{
                    this.setState({showTimer:!this.state.showTimer})
                }}> Show / Hide timer</button>
            </div>
        )
    }
}

export default App