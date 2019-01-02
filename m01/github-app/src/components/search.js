'use strict'
import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => (
    <div className='search'>
        <input
            type='search'
            placeholder='Digite o nome do usuário no GitHub'
            onKeyUp={e=>{
                const keyCode = e.which || e.keyCode
                const ENTER = 13
                if(keyCode=== ENTER){
                    ajax().get(`https://api.github.com/users/${e.target.value}`)
                    .then(result=>{
                        console.log(result)
                    })
                }
            }}
            onChange={e=>{
                console.log('change', e.target.value)
            }}
        />
    </div>
)

export default Search