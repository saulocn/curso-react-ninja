'use strict'

import React, { Component } from 'react'

const App = () => (
    <div className='app'>
        <div className='search'>
            <input 
                type='search' 
                placeholder='Digite o nome do usuário no GitHub'
            />
        </div>
        <div className='user-info'>
            <img src="https://avatars3.githubusercontent.com/u/17600281?v=4" />
            <h1>
                <a href="https://github.com/saulocn">
                    Saulo de Carvalho Neto
                </a>
            </h1>
            <ul className='repos-info'>
                <li>- Repositórios: 122</li>
                <li>- Seguidores: 2</li>
                <li>- Seguindo: 2</li>
            </ul>
            <div className='actions'>
                <button>Ver Repositórios</button>
                <button>Ver Favoritos</button>
            </div>
            <div className='repos'>
                <h2>Repositórios</h2>
                <ul>
                    <li><a href='#'>Nome do Repositório</a></li>
                </ul>
            </div>
            <div className='starred'>
                <h2>Favoritos</h2>
                <ul>
                    <li><a href='#'>Nome do Repositório</a></li>
                </ul>
            </div>
        </div>
    </div>
)
export default App