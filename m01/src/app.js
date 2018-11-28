'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App  extends Component {
    render () {
        return (
            <div className='container'>
                <Title name='Saulo' lastName={{first:'Carvalho', last:'Neto'}}  />
                {['blue', 'red', 'green'].map((square) => (
                    <Square key={} color={square} />
                ))}
            </div>
        )
    }
}

export default App