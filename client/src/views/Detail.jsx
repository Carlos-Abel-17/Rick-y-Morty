import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import '../css/StyleDetail.css'

function Detail() {
  const [character, setCharacter] = useState({});

  const {id} = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
    
  }, []);

  return (
    <div className="contenedor-divs">
      <div className="contenedor-detalles">
        <div className="seccion-datos">
        <h2 id="Nombre">{character.name}</h2>
        
        <div id="divs">
          <h3 className="los-Detalles">Species:</h3>
          <p>{character.species}</p>
        </div>
        <div id="divs">
          <h3 className="los-Detalles">Gender:</h3>
          <p>{character.gender}</p>
        </div>
        <div id="divs">
          <h3 className="los-Detalles">Status:</h3>
          <p>{character.status}</p>
        </div>
        <div id="divs">
          <h3 className="los-Detalles">Origin:</h3>
          <p>{character.origin?.name}</p>
        </div>
        <div id="divs">
          <h3 className="los-Detalles">Location:</h3>
          <p>{character.location?.name}</p>
        </div>
      </div>
        </div>
      <div className="contenedor-imagen">
        <img id="imagen" src={character.image} alt={character.name} />
      </div>
    </div>
  );
}

export default Detail;
