'use strict'
import React from 'react'


const Title =  ({name, lastName}) => (
    <h1>Olá {`${name} ${lastName.first} ${lastName.last}`}!</h1>
)

Title.defaultProps = {
    name : 'Desconhecido',
    lastName : {
        first:'Sem',
        last:'Sobrenome'
    }
}

export default Title