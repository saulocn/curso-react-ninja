'use strict'

import React from 'react'
import Title from './title'

class App  extends React.Component {
    render () {
        return (
            <div className='container'>
                <Title name='Saulo' lastName={{first:'Carvalho', last:'Neto'}}  />
            </div>
        )
    }
}


/*
const App =  React.createClass({
    render: function () {
        return <div className='container'>
            <Title name='Saulo' lastName={{first:'Carvalho', last:'Neto'}}  />
            <label htmlFor='input' data-label='Label'>Input</label>
            <input type='text' id='input' aria-hidden='{true}'/>
        </div>
    }
})
*/



export default App