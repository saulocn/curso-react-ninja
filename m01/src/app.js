'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
    constructor(){
        super()
        console.log('app: constructor')
        this.state = {
            showTimer : true,
            time: 0
        }
    }
    componentWillMount(){
        console.log('app: componentWillMount')
    }
    componentDidMount(){
        console.log('app: componentDidMount')
    }
    componentWillUnmount
    render() {
        console.log('app: render')
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