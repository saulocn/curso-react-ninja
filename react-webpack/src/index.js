'use strict'
// deve ser sempre as primeiras linhas do arquivo

import React from 'react'
import { render as renderReactDom} from './react-dom'
import Title from './app'

renderReactDom(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)