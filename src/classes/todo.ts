interface TodoItem {
  id: string;
  name: string;
  todo: string;
}

export class Todo {
  constructor() {}

  getAllTodos(): TodoItem[] {
    return [];
  }
  getTodo(id: string): TodoItem {
    return {
      id: "sfdf",
      name: "stuff",
      todo: "do stuff",
    };
  }

  addTodo(todo: TodoItem): Boolean {
    return true;
  }

  deleteTodo(id: string) {}
}
