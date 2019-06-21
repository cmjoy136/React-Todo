import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS
} from "../actions/constants";
import todoList from "../todos";

const initialState = {
  todos: todoList
};

// const newTodos = this.state.todos.slice();
//       newTodos.push({
//         userId: 1,
//         id: Math.ceil(Math.random() * 10),
//         title: this.state.value,
//         completed: false
//       });

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    console.log(action.text)
      return {
        ...state,
        todos: [
          {
            userId: 1,
            id: Math.ceil(Math.random() * 10),
            title: action.text,
            completed: false
          },
          ...state.todos
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case CLEAR_COMPLETED_TODOS:
      console.log('hello')
        return  {
          ...state,
          todos: state.todos.filter(todo => !todo.completed)
      }
    default:
      return state;
  }
};

export default todos;
