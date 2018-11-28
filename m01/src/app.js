'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App  extends Component {
    render () {
        return (
            <div className='container'>
                <Title name='Saulo' lastName={{first:'Carvalho', last:'Neto'}}  />
                {[ 'green', 'white', 'red', 'green'].map((square, index) => (
                    <Square key={index} color={square} />
                ))}
            </div>
        )
    }
}

export default App