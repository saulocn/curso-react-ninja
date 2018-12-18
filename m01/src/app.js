'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
    constructor(){
        super()
        console.log('constructor')
        this.state = {
            showTimer : true,
            time: 0
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
                <Timer time={this.state.time} /> 
                <button onClick={()=>{
                    this.setState({time:this.state.time+10})
                }}>Change props</button>
            </div>
        )
    }
}

export default App