import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipes: [],
  };

  
  export const recipeSlice = createSlice({
    name: 'shahul',
    initialState,
    reducers: {
      addRecipe: (state, action) => {
        state.recipes.push(action.payload);
      },
      getRecipes: (state,action) => {
        state.recipes = action.payload
      }
    },
  });

  // Export the actions
export const { addRecipe, getRecipes } = recipeSlice.actions;

// Export the reducer
export default recipeSlice.reducer;