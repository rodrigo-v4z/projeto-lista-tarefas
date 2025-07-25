import { useState } from 'react';
import './App.css';
import { adicionarTarefa, removerTarefa } from './utils/lista';

function App() {
  const [lista_tarefas, setLista] = useState([]);
  const [nova_tarefa, setTarefa] = useState('');

  function handleAdicionar() {
    if (nova_tarefa.trim() === '') return;
    setLista(adicionarTarefa(lista_tarefas, nova_tarefa));
    setTarefa('');
  }

  function handleRemover(tarefa) {
    setLista(removerTarefa(lista_tarefas, tarefa));
  }

  return (
    <>
      <input
        type="text"
        value={nova_tarefa}
        onChange={e => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={handleAdicionar}>Adicionar Tarefa</button>

      <ul>
        {lista_tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}{' '}
            <button onClick={() => handleRemover(tarefa)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;