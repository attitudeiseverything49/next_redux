'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from '../redux/action/todoAction';
import { fetchRecipes } from '@/redux/action/recipeAction';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.recipes.recipes);

  console.log('todos',todos);


  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
