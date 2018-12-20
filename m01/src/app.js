'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            value: 'Valor inicial',
            checked: false,
            valueSelect: '2',
            valueSelectMulti: ['2', '3']
        }
    }
    render() {
        return (
            <div>
                <form 
                onSubmit={
                    (e)=>{
                        e.preventDefault();
                        console.log('event', e)
                    }
                }
                onChange={
                    e=>{
                        console.log('name', e.target.name)
                        console.log('value', e.target.value)
                    }
                }
                >
                    <input type='text'
                        value={this.state.value}
                        onChange={(e) => {
                            this.setState({
                                value: e.target.value
                            })
                        }} />
                    <br />
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            value='meu-checkbox'
                            checked={this.state.checked}
                            onChange={
                                (e) => {
                                    this.setState({ checked: !this.state.checked })
                                }
                            }
                        />
                        Checkbox
                    </label>
                    <br />
                    <br />
                    <input
                        type='radio'
                        name='rd'
                        defaultChecked
                        value='1' />
                    Radio 1
                    <input
                        type='radio'
                        name='rd'
                        value='2' />
                    Radio 2
                    <br />
                    <br />

                    <select value={this.state.valueSelect}
                        onChange={
                            (e) => {
                                this.setState({
                                    valueSelect: e.target.value
                                })
                            }

                        }>
                        <option value='1'>Opção 1</option>
                        <option value='2'>Opção 2</option>
                        <option value='3'>Opção 3</option>
                    </select>

                    <br />
                    <br />


                    <select multiple value={this.state.valueSelectMulti}
                        onChange={
                            (e) => {
                                console.log(e.target.value)
                                this.setState({
                                    valueSelectMulti: this.state.valueSelectMulti.concat(e.target.value)
                                })
                            }

                        }>
                        <option value='1'>Opção 1</option>
                        <option value='2'>Opção 2</option>
                        <option value='3'>Opção 3</option>
                    </select>

                    <br />
                    <br />

                    <textarea defaultValue={'Valor Padrão do text area com \n quebra\n de \n linha'} />
                    <br />
                    <br />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        )
    }
}

export default App