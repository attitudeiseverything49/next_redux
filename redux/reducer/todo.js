//import { getTodos } from '../action/actionType'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
  };

  // Traditional method
  // export const todoReducer = (state=initialState.todos,action) =>{
  //   switch(action.type){
  //       case FETCH_TODOS_SUCCESS:
  //           return action.payload
  //       default:
  //           return state
  //   }
  // }

  export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.push(action.payload);
      },
      getTodos: (state,action) => {
        state.todos = action.payload
      }
    },
  });

  // Export the actions
export const { addTodo, getTodos } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;