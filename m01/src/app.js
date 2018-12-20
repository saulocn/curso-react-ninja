'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            value: 'Valor inicial',
            checked: false
        }
    }
    render() {
        return (
            <div>
                <form>
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
                    value='1'/> 
                    Radio 1
                    <input 
                    type='radio'
                    name='rd'
                    value='2'/> 
                    Radio 2
                    <br />
                    <br />

                </form>
            </div>
        )
    }
}

export default App