import {useState} from "react";
import '../css/StyleSearch.css'

export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    <div>
      <input className="barra-de-busqueda"
        style={{borderBottomLeftRadius:'2em',borderTopLeftRadius:'2em',border:'none',padding:'0.5em'}}
        type="search"
        onChange={changeHandler}
        value={id}
        placeholder="Search Character"
        />
      <button 
       className="boton-agregar"
       style={{borderBottomRightRadius:'2em',borderTopRightRadius:'2em',border:'none',padding:'0.5em',backgroundColor:'white'}}
       onClick={() => {
         onSearch(id);
        }}
        >
        Agregar
      </button>
    </div>
  );
}
