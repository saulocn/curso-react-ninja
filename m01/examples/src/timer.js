import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super()
        console.log('timer: constructor')
        this.state = {
            time: 0
        }
        this.timer;
    }
    componentWillReceiveProps(nextProps) {
        console.log('timer: componentWillReceiveProps', this.props, nextProps)
    }
    componentDidMount() {
        this.timer = setInterval(() =>
            this.setState({
                time: this.state.time + 1
            }), 1000)
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('timer: componentWillUpdate', this.props, nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate', this.state, nextState)
        //console.log('shouldComponentUpdate', this.props, nextProps)
        //return this.state.time !== nextState.time   
        return this.props.time !== nextProps.time  
        //return true
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate', this.props, prevProps)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        //console.log('timer: render')
        return (<div>Timer: {this.state.time}</div>)
    }
}

export default Timer