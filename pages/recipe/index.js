'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';;
import { fetchRecipes } from '@/redux/action/recipeAction';

const TodoList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
