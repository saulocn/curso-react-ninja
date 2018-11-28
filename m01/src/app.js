'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App  extends Component {
    render () {
        return (
            <div className='container' onClick={e => alert('clicou!')} >
                <Title name='Saulo' lastName={{first:'Carvalho', last:'Neto'}}  />
                <Square  />
            </div>
        )
    }
}

export default App