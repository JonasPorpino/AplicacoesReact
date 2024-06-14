import BotaoClasse from "./components/BotaoClasse";
import BotaoFuncao from "./components/BotaoFuncao";
import Cabecalho from "./components/Cabecalho";
import CabecalhoClasse from "./components/CabecalhoClasse";

export default function App() {
  return (
    <div>
      <Cabecalho>
          <p>Elemento 1</p>
          <p>Elemento 2</p>
          <p>Elemento 3</p>
      </Cabecalho>

      <CabecalhoClasse>
          <p>Elemento 1</p>
          <p>Elemento 2</p>
          <p>Elemento 3</p>
      </CabecalhoClasse>
      
      <BotaoFuncao nome="Botão Função"/>
      
      <BotaoClasse nome= "Botão Classe"/>
    </div>
  )
}

