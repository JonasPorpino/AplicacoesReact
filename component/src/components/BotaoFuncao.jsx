export default function BotaoFuncao(props) {
  return (
        <button type='button'
        onClick={() =>
        console.log('Clicou em função!')}
        >
        {props.nome}
        </button>
    )
}
