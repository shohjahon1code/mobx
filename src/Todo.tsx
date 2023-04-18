import React, { useState } from "react";
import { observer } from "mobx-react";
import { useLocalObservable } from "mobx-react-lite";
import TodoListStore from "./store";





const TodoList: React.FC = observer(() => {
  const [title, setTitle] = useState("");

  const todoListStore = useLocalObservable<TodoListStore>(() => new TodoListStore());

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title) {
      todoListStore.addTodo(title);
      setTitle("");
    }
  };

  const handleToggleTodo = (index: number) => {
    todoListStore.toggleTodo(index)
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleAddTodo}>
        <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoListStore.todos.map((todo, index) => (
          <div key={index}>
            <input

              type="checkbox"
              checked={todo.completed}
              onChange={() => todoListStore.toggleTodo(index)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.title}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;