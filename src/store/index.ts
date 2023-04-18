interface ITodo {
  title: string;
  completed: boolean;
}

class TodoListStore {
  todos: ITodo[] = [];

  addTodo = (title: string) => {
    this.todos.push({ title, completed: false });
  };

  toggleTodo = (index: number) => {
    this.todos[index].completed = !this.todos[index].completed;
  };
}

export default TodoListStore;
