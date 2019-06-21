import {
  TOGGLE_TODO,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS
} from "./constants";

// export function toggleTodo

export const checkItem = id => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const deleteItem = id => ({
  type: DELETE_TODO,
  id
});

export const addItem = text => ({
  type: ADD_TODO,
  text
});

export const clearCompletedTodos = () => ({
  type: CLEAR_COMPLETED_TODOS
});
//   const newTodos = this.state.todos.map(todo => {
//     if (todo.id === id) {
//       return {
//         ...todo,
//         completed: !todo.completed
//       };
//     }
//     return todo;
//   });
//   this.setState({ todos: newTodos });

// export function addTodo = e => {
//     if (e.key === "Enter") {
//       const newTodos = this.state.todos.slice();
//       newTodos.push({
//         userId: 1,
//         id: Math.ceil(Math.random() * 10),
//         title: this.state.value,
//         completed: false
//       });
//       this.setState({
//         value: "",
//         todos: newTodos
//       });
//     }
//   };

// export function deleteTodo = id => e => {

// }

// export function clearCompletedTodo

// deleteItem = id => e => {
//     const newTodos = this.state.todos.filter(todo => todo.id !== id);
//     this.setState({ todos: newTodos });
//   };

//   deleteCheckedItem = e => {
//     const newTodos = this.state.todos.filter(todo => todo.completed !== true);
//     this.setState({
//       todos: newTodos
//     });
//   };
