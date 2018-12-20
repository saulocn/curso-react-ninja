'use strict'

import React, { Component } from 'react'
import Button from './button';

class App extends Component {
    constructor(){
        super()
        this.state = {
            value:'Valor inicial'
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input type='text' defaultValue='Valor inicial' />
                </form>
            </div>
        )
    }
}

export default App