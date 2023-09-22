
import { ADD_FAV,REMOVE_FAV,ORDER,FILTER,RESET} from "./action"

const initialSate={
    Favorites:[],
     character:[]
    //  allcharacter:[]
}

export const rootreducer=(state=initialSate,action) => {
    const{type,payload}=action
    
  switch (type){

    case ADD_FAV:
      return { 
        ...state,
         Favorites: payload, 
         character: payload 
        };

        case REMOVE_FAV:
          return { 
            ...state, 
            Favorites: payload 
          }


        case ORDER:
          let ordenados;
          if (payload === 'Ascendente') {
            ordenados=state.Favorites.sort((a,b)=>(a.id>b.id? 1 : -1))
          }else{
            ordenados=state.Favorites.sort((a,b)=>(b.id>a.id ? 1 : -1))
      }
      return{
       ...state,
       Favorites:[...ordenados]
      }
      
      case FILTER:
        {console.log(state.character)}
        return{
          ...state,
          Favorites:state.character.filter(character=>character?.gender === payload)
        }
      case RESET:
        console.log({...state,Favorites:state.character})
        return{
          ...state,
          Favorites:state.character
        }
        
   default: 
   return{
    ...state
   }
  }

}
