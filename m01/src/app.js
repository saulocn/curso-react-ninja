'use strict'

import React, { Component } from 'react'
import Title from './title'

class App  extends Component {
    render () {
        return (
            <div className='container'>
                <Title name='Saulo' lastName={{first:'Carvalho', last:'Neto'}}  />
            </div>
        )
    }
}

export default App