import {useNavigate} from "react-router-dom";
import '../css/StyleCard.css'
import { addFav,removeFav } from "../redux/action";
import { connect } from 'react-redux'
import { useState } from "react";
import { useEffect } from "react";




function Card(props) {
  const navigate = useNavigate();
  const  {character,onClose,addFav,removeFav,favorites} = props;
  const [isFav,setisFav]=useState(false);
  const [OnCloseBT,setOnCloseBT]=useState(true)

  
  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }


 
  useEffect(()=>{
    if(!onClose){
      setOnCloseBT(false)
    }
  },[])  


  useEffect(() => {
    favorites.forEach((fav) => {
       if (fav.id === character.id) {
          setisFav(true);
       }
    });
 }, [favorites]);


  function handleFavorite(character){
    
    if (!isFav) {
      addFav(character),
      setisFav(true)
    }else{
      removeFav(character)
      setisFav(false)
    }
  }
  return (
    <div className="carta">
      <div className="contenedor-boton">

  {   
   isFav ? (
     <button className="boton-fav" onClick={()=>{handleFavorite(character.id)}}>❤️</button>
     ) : (
      <button className="boton-fav"  onClick={()=>{handleFavorite(character)}}>🤍</button>
   )
}
    
   { OnCloseBT  &&(<button className="boton-borrar"
        onClick={() =>{
           onClose(character.id)}
        }
        >
        X
      </button>)}
        </div>
      <div>

      <h2 className="datos">Name: {character.name}</h2>
      
      <img className="personajes" src={character.image} alt={character.name} />

      <h2 className="datos">Species: {character.species}</h2>

      <h2 className="datos">Gender: {character.gender}</h2>
       
      <h2 className="datos" >Id: {character.id}</h2>

      <button className="mas-detalles"  onClick={navigateHandler} >Mas Detalle</button>

      </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    favorites:state.Favorites
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addFav:(character) =>dispatch(addFav(character)),

    removeFav:(id) => dispatch(removeFav(id))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card) 
