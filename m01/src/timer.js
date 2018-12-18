import React, {Component} from 'react'

class Timer extends Component {
    constructor(){
        super()
        this.state = {
            time:0
        }
        this.timer;
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', this.props, nextProps)
    }
    componentDidMount(){
        this.timer = setInterval(() => 
            this.setState({
                time:this.state.time+1
            }), 1000)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', this.state, nextState)
        console.log('shouldComponentUpdate', this.props, nextProps)
        //return this.state.time !== nextState.time   
        //return this.props.time !== nextProps.time  
        return true 
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        console.log('render timer')
        return (<div>Timer: {this.state.time}</div>)
    }
}

export default Timer