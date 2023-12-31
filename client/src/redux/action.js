 export const ADD_FAV ='ADD_FAV'
 export const REMOVE_FAV='REMOVE_FAV'
 export const ORDER='ORDER'
 export const FILTER ='FILTER'
 export const RESET ='RESET'

import axios from 'axios'

 
 export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
     try {
       const {data}=await axios.post(endpoint, character)
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
     } catch (error) {
      console.log({error:error.message})
     }
     
  };
};

export const removeFav = (id) => {
  try {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      const {data}= await axios.delete(endpoint)
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
      
    };
  } catch (error) {
      console.log("error action.js")
 
    }
    
  }

export const orderFav=(order)=>{
  return{
    type:ORDER,
    payload:order
  }
}

export const filterFav=(filtro) => { 
  return{
    type:FILTER,
    payload:filtro
  }
 }

 export const resetFav=()=>{
  return{
    type:RESET
  }
 }



