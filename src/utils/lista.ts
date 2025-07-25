export function adicionarTarefa(lista_tarefas: Array<string>, tarefa: string): Array<string> {
  return [...lista_tarefas, tarefa]; // novo array com a nova tarefa no final
}

export function removerTarefa(lista_tarefas: Array<string>, tarefa: string): Array<string> {
  return lista_tarefas.filter(t => t !== tarefa); // novo array sem a tarefa removida
}