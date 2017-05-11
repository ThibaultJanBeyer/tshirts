// @TODO: do this????
import { computed, observable } from "mobx";

class Item {
  @observable color

  constructor({ color }) {
    this.color = color;
  }
}

export class ItemStore {
  @observable filter = ""
  @computed get filteredTodos() {
    const matchesFilter = new RegExp(this.filter, "i");
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
  }

  createTodo(value) {
    this.todos.push(new Todo(value));
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete);
    this.todos.replace(incompleteTodos);
  }

  toggleComplete = (id) => {
    const specificTodo = this.todos.filter(todo => todo.id == id)[0];
    specificTodo.complete = !specificTodo.complete;
  }
}

export default new ItemStore;

