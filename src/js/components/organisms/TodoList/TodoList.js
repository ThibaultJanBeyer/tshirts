import React from "react";
import { observer } from "mobx-react";
import store from "store";


@observer
export default class TodoList extends React.Component {
  constructor() {
    super();

    this.toggleComplete = this.toggleComplete.bind(this);
    this.createNew = this.createNew.bind(this);
    this.filter = this.filter.bind(this);
  }

  createNew(e) {
    if (e.which === 13) {
      store.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  filter(e) {
    store.filter = e.target.value;
  }

  toggleComplete(e) {
    const id = e.target.getAttribute("data-todoid");
    store.toggleComplete(id);
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = store;

    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
       <input type="checkbox"
              onChange={this.toggleComplete}
              value={todo.complete}
              data-todoid={todo.id}
              checked={todo.complete} />
       <span>{todo.value}</span>
      </li>
    ));
    return (
      <div>
        <h1>todos</h1>
        <input className="new" onKeyPress={this.createNew} />
        <input className="filter" value={filter} onChange={this.filter} />
        <ul>{todoLis}</ul>
        <button onClick={clearComplete}>Clear Complete</button>
      </div>
    );
  }
}
