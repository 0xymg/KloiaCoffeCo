import * as actionTypes from "./actionTypes";

export function searchSuccess(key){
    return {
        type: actionTypes.SEARCH_SUCCESS, payload: key
    }
}


