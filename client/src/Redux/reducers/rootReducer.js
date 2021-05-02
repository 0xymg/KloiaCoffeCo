import {combineReducers} from 'redux';
import coffeeListReducer from './coffeeListReducer'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'

const rootReducer = combineReducers({
    coffeeListReducer,
    changeCategoryReducer,
    categoryListReducer,
})

export default rootReducer;