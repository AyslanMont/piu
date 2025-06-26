import { useState } from "react";

export default function Task() {
  const [tasks, setTasks] = useState(["teste"]);
  const [text, setText] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTasks([...tasks, text]);
          setText("");
        }}
      >
        <h2>Lista de Tarefas React</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Adicionar" />
      </form>

      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}
