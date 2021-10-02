import * as actionTypes from "./acitonTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, 
    payload: category };
}
export function getCategoriesSuccess(categories){
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS, 
    payload: categories
  }
}

export function getCategories(){
  return function(dispatch){
    
    let url="http://localhost:3000/categories"
    return fetch(url).then(response=>response.json()) //gelen sonucu response et ve json çevir response herhangi bir değer verilebilir
    //response her zaman stringtir. biz onu json a çeviririz
    //dispatch yalamak demektir. result yani yakalanan sonuc dispacth e gönderilir

    .then(result=>dispatch(getCategoriesSuccess(result)));

  }
}
