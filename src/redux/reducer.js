import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "./actions";
const initialState = {
  todos: [],
};

export default function reducer(state= initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: addTodo(action.payload.task),
      };
    case COMPLETE_TODO:
      return {
        todos: completeTodo(action.payload.id),
      };
    case DELETE_TODO:
      return {
        todos: deleteTodo(action.payload.id),
      };

    default:
        return {
            todos:state.todos
        }
  }

  function addTodo(task) {
    return [
      ...state.todos,
      {
        id:`${Math.random()}`,
        task: task,
        completed: false,
      },
    ];
  }

  function completeTodo(id) {
    const filterdTodos = [];
    state.todos.map((todo) => {
      if (todo.id === id) {
         todo.completed = true;
         filterdTodos.push(todo);
      }else{

        filterdTodos.push(todo);
      }
    });

    return filterdTodos;
  }

  function deleteTodo(id) {
    return state.todos.filter((todo) => todo.id !== id);
  }
}
