import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import '../css/StyleNav.css'
import logo from '../img/logo-rick.png'
import title from '../img/title_rick.png'

function Nav({onSearch, randomize ,logout}) {
  return (
    <div className="header">
      <div className="presentacion">
      <img className="logo" src={logo} alt="" />
      <img className="title" src={title} alt="" />
      </div>
      <div className="conteiner-link" >
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/home">Home</Link>
        <Link className="link" to="/favorites">Favorites</Link>
      </div>
      <div className="busqueda">
      <SearchBar  onSearch={onSearch} />
      <button className="random"  onClick={randomize}>ADD RANDOM</button>
      <button className="Logout" onClick={logout}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Nav;
