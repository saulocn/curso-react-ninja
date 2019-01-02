'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content';

class App extends Component {
    constructor() {
        super()
        this.state = {
            //userinfo: null,
            userinfo: {
                username: 'Saulo de Carvalho Neto',
                photo: 'https://avatars3.githubusercontent.com/u/17600281?v=4',
                login: 'saulocn',
                repos: 34,
                followers: 2,
                following:14
            },
            repos: [{
                name: 'Nome do repositório do container',
                link: '#',
            }],
            starred: [{
                name: 'Nome do repositório Favorito do container',
                link: '#',
            }]
        }
    }
    render() {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
            />
        )
    }
}

export default App