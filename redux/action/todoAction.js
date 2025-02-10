import { getTodos } from './actionType'
import axios from 'axios';

export const fetchTodosSuccess = (todos) => ({
    type: getTodos,
    payload: todos,
  });

  
export const fetchTodos = () => async (dispatch) => {
  try{
    const response = await axios.get('https://dummyjson.com/todos');
    console.log('response',response)
    dispatch(fetchTodosSuccess(response.data.todos));
    }catch(e){
      console.error('error in fetchTodos',e);
    }
  };
