let todos = [
  { id: 1, title: "Task 1", completed: false, description: "First task" },
  { id: 2, title: "Task 2", completed: true, description: "Second task" },
  { id: 3, title: "Task 3", completed: false, description: "Third task" },
  { id: 4, title: "Task 4", completed: true, description: "Fourth task" },
];

export default function WorkingWithRemoteArrays(app) {
  const getTodos = (req, res) => {
    const { completed } = req.query;

    if (completed !== undefined) {
      const completedBool = completed === "true";
      res.json(todos.filter((todo) => todo.completed === completedBool));
      return;
    }

    res.json(todos);
  };

  const getTodoById = (req, res) => {
    const { id } = req.params;
    const todo = todos.find((item) => item.id === parseInt(id));
    res.json(todo);
  };

  const createNewTodo = (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      completed: false,
      description: "New task description",
    };
    todos.push(newTodo);
    res.json(todos);
  };

  const removeTodo = (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex((item) => item.id === parseInt(id));

    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
    }

    res.json(todos);
  };

  const updateTodoTitle = (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((item) => item.id === parseInt(id));

    if (todo) {
      todo.title = title;
    }

    res.json(todos);
  };

  const updateTodoCompleted = (req, res) => {
    const { id, completed } = req.params;
    const todo = todos.find((item) => item.id === parseInt(id));

    if (todo) {
      todo.completed = completed === "true";
    }

    res.json(todos);
  };

  const updateTodoDescription = (req, res) => {
    const { id, description } = req.params;
    const todo = todos.find((item) => item.id === parseInt(id));

    if (todo) {
      todo.description = description;
    }

    res.json(todos);
  };

  app.get("/lab5/todos", getTodos);
  app.get("/lab5/todos/create", createNewTodo);
  app.get("/lab5/todos/:id/delete", removeTodo);
  app.get("/lab5/todos/:id/title/:title", updateTodoTitle);
  app.get("/lab5/todos/:id/completed/:completed", updateTodoCompleted);
  app.get("/lab5/todos/:id/description/:description", updateTodoDescription);
  app.get("/lab5/todos/:id", getTodoById);
}
