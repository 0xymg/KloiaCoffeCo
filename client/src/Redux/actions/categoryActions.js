import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(param){
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS, payload: param
    }
}

export function getCategories(category) {
  return function (dispatch) {
    let url = "http://localhost:3001/categories"
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getCategoriesSuccess(result)));
  };
}
