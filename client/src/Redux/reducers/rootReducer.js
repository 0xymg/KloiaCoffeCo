import {combineReducers} from 'redux';
import coffeeListReducer from './coffeeListReducer'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    coffeeListReducer,
    changeCategoryReducer,
    categoryListReducer,
    // searchReducer,
})

export default rootReducer;