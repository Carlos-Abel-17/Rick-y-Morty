import {useState, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./views/About.jsx";

import "./App.css";
import Detail from "./views/Detail.jsx";
import ErrorPage from "./error/ErrorPage.jsx";
import Login from "./views/Login.jsx";
import Favorites from "./views/Favorites.jsx";


function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
    } catch (error) {
      console.log(error)
    }
 }
  // function loginHandler(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  //   else if (!userData.password === PASSWORD || userData.email === EMAIL) {
  //     alert('algo esta mal en el Password, por favor reviselo ')
  //   }
  //  else{
  //    if (userData.password === PASSWORD || !userData.email === EMAIL) {
  //     alert('algo esta en el Email, por favor reviselo ')
       
  //   }
  //  }
  // }

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
    
  }, [access]);

  
// URL A A LA QUE LE DEBEMOS VOLVER "https://rickandmortyapi.com/api/character/${id}"
  async function searchHandler(id) {
    try {
      const {data}= await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      )
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
     
    } catch (error) {
      console.log("error de searchHandeler que esta en app.jsx")
    }
  }

  function closeHandler(id) {
    console.log()
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className="App">
    

      {location.pathname !== "/" && (
        <Nav
          onSearch={searchHandler}
          randomize={randomHandler}
          logout={logoutHandler}
        />
      )}

      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites"  element={<Favorites/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
