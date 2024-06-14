import React, { Component } from 'react'

export default class CabecalhoClasse extends Component {
  render() {
    return (
        <header>
        <h1>App React em Classe</h1>
            {this.props.children}
        </header>
    )
  }
}
