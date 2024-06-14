export default function Cabecalho(props) {
  return (
    <header>
        <h1>App React em Funcao</h1>
        {props.children}
    </header>
  )
}
