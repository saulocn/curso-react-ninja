'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: [
                /*{
                name: 'Nome do repositório Favorito do container',
                link: '#',
            }*/]
        }
    }

    handleSearch(e) {
        const keyCode = e.which || e.keyCode
        const ENTER = 13
        if (keyCode === ENTER) {
            ajax().get(`https://api.github.com/users/${e.target.value}`)
                .then(result => {
                    this.setState({
                        userinfo: {
                            username: result.name,
                            photo: result.avatar_url,
                            login: result.login,
                            repos: result.public_repos,
                            followers: result.followers,
                            following: result.following
                        }
                    }
                    )
                })
        }
    }

    getRepos(e) {
        ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
            .then(result => {
                let repos = result.map(rep => {
                    return {
                        name: rep.name,
                        link: rep.html_url
                    }
                })
                this.setState({ repos })
            })
    }

    getStarred(e) {
        ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/starred`)
            .then(result => {
                let repos = result.map(rep => {
                    return {
                        name: rep.name,
                        link: rep.html_url
                    }
                })
                this.setState({ repos })
            })

    }

    render() {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                handleSearch={(e) => this.handleSearch(e)}
                getRepos={e => this.getRepos(e)}
                getStarred={e => this.getStarred(e)}
            />
        )
    }
}

export default App