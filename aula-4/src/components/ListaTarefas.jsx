import "./ListaTarefas.css"

export default function ListaTarefa() {
  const tarefas = [
    { id: 1, titulo: "Estudar React", concluida: true },
    { id: 2, titulo: "Fazer exercício", concluida: false },
    { id: 3, titulo: "Ler um livro", concluida: false },
    { id: 4, titulo: "Arrumar a cama", concluida: true },
  ];

  return (
    <>
      <h1>Tarefas</h1>
      <ul className="tarefas">
        {tarefas.map((tarefa) => {
          return (
            <li>
              <div>
                <p>id: {tarefa.id}</p>
                <p>titulo: {tarefa.titulo}</p>
                <p>concluida: {tarefa.concluida ? "Sim" : "Não"}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
