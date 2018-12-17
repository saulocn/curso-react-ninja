'use strict'

import React, { Component } from 'react'
import Button from './button'

class App  extends Component {
    render () {
        return (
            <div className='container' >
                <Button>
                    <span>Texto</span>
                    Outro texto
                </Button>
            </div>
        )
    }
}

export default App