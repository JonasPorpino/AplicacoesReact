import React, { Component } from 'react'

export default class BotaoClasse extends Component {
  render() {
    return (
        <button type='button'
        onClick={() =>
        console.log('Clicou em classe!')}
        >
        {this.props.nome}
        </button>
    
        )
    }
}
