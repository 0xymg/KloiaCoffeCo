import * as actionTypes from "./actionTypes"

export function getCoffeeListSuccess(coffee){
    return {
        type: actionTypes.COFFEE_LIST_OK, payload: coffee
    }
}

export function getCoffeeList(category) {
  return function (dispatch) {
    let url = "http://localhost:3001/coffees"
    if(category){
        if(category !== "all"){
            url = url + "?category=" + category
        }
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getCoffeeListSuccess(result)));
  };
}


