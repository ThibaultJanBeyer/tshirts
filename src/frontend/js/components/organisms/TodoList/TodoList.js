import React from "react"
import { observer } from "mobx-react"
import store from "store"


@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter(e) {
    store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = store

    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
       <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
       <span>{todo.value}</span>
      </li>
    ))
    return <div>
      <h1>todos</h1>
      <input className="new" onKeyPress={this.createNew.bind(this)} />
      <input className="filter" value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoLis}</ul>
      <button onClick={clearComplete}>Clear Complete</button>
    </div>
  }
}
