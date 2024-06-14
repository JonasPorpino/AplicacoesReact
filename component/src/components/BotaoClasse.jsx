import React, { Component } from 'react'

export default class BotaoClasse extends Component {
  render() {
    return (
      <div>
         <button onClick={(
        )=> console.log("Clicou na classe")}> Clique (classe)</button>
      </div>
    )
  }
}
