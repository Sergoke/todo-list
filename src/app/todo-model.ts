export class ToDoItem {
  constructor(
    public title: string,
    public done: boolean
  ) { }
}

export class ToDosModel {
  private todos: ToDoItem[];

  constructor() {
    const todosString = localStorage.getItem('todos');
    this.todos = JSON.parse(todosString) || [];
    setInterval(() => {console.log(this.getAll()); }, 1000);
  }

  getAll(): ToDoItem[] {
    return this.todos.map(item => JSON.parse(JSON.stringify(item)));
  }

  add(title: string) {
    const item = new ToDoItem(title, false);
    this.todos.push(item);
    this.updateStorage();
  }

  update(index: number, item: ToDoItem) {
    this.todos[index] = item;
    this.updateStorage();
  }

  delete(index: number) {
    this.todos.splice(index, 1);
    this.updateStorage();
  }

  private updateStorage() {
    const todosString = JSON.stringify(this.todos);
    localStorage.setItem('todos', todosString);
  }
}
