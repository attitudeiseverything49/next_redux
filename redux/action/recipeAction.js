// import { getRecipes } from "./actionType";
import { getRecipes } from "../reducer/recipeReducer";
import axios from "axios";

//Action Creator Traditional
// export const fetchRecipesSuccess = (recipes) => ({
//     type: getRecipes,
//     payload: recipes
// })

//Thunk
export const fetchRecipes =() => async (dispatch) => {
    try{
        const response = await axios.get('https://dummyjson.com/recipes');
        console.log('recipes',response.data.recipes)
        dispatch(getRecipes(response.data.recipes));
        }catch(e){
          console.error('error in fetchTodos',e);
        }
}