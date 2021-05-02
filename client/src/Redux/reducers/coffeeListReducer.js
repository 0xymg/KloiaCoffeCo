import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


export default function coffeeListReducer(state= initialState.coffeeList, action){
    switch(action.type){
        case actionTypes.COFFEE_LIST_OK:
            return action.payload;
        default: 
            return state;
    }
}
