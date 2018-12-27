'use strict'
import React from 'react'

const UserInfo = () => (
    <div className='user-info'>
        <img src="https://avatars3.githubusercontent.com/u/17600281?v=4" />
        <h1 className='username'>
            <a href="https://github.com/saulocn">
                Saulo de Carvalho Neto
                </a>
        </h1>
        <ul className='repos-info'>
            <li>- Repositórios: 122</li>
            <li>- Seguidores: 2</li>
            <li>- Seguindo: 2</li>
        </ul>
    </div>
)

export default UserInfo