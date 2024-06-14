export default function App() {

  const tarefa = {id: "T1", descricao:"Estudar React", conluida: false};
 
  if(tarefa.conluida){
    return <p>Tarefa conluída: {tarefa.descricao}</p>
  } else{
    return <p>Tarefa pendente: {tarefa.descricao}</p>
  }

}

/** sintaxe mais limpar 
  return<p>
  Tarefa{(tarefa.concluida) ? "CONCLUÍDA":"PENDENTE"}: {tarefa.descricao}
  </p>


/** para o caso de uma
  return (tarefa.conluida) ? null : <p>tarefa pendente: {tarefa.descricao}</p>;



  return tarefa.conluida && <p>Tarefa concluida: {tarefa.descricao}</p>;
*/
