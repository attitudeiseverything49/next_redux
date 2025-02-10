import { combineReducers } from 'redux';
import todoSlice from './todo'
import recipeSlice from './recipeReducer';

const rootReducer = combineReducers({
    todos : todoSlice,
    recipes : recipeSlice
})

export default rootReducer