'use strict'
// deve ser sempre as primeiras linhas do arquivo

import React from 'react'
import ReactDOM from 'react-dom'
import Title from './app'

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)