import {useEffect,useState} from "react";
import {Howl} from 'howler'
import SongIntro from '../img/sound/rick-and-morty-theme-song-hd.mp3'
import {validar} from "../helpers";
import '../css/StyleLogin.css'


function Login({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Email required", //
    password: "Password required", //
  });

  function inputHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validar({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();

    login(userData);
  }

  function diseableHandler() {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }

    return disabled;
  }

  useEffect(()=>{
    const sound= new Howl({
      src:[SongIntro],
      autoplay:true,
      loop:true
    })
    return()=>{
      sound.stop()
    }
  },[])

  return (
    <div className="caja-principal">
      <div className="caja-externa">
        <h2 className="title">LOG IN</h2>
      <form className="formulario" onSubmit={submitHandler}>
        <div className="email">
          <label className="texto">USERNAME</label>
          <input className="inputs"
            type="text"
            name="email"
            value={userData.email}
            onChange={inputHandler}
            placeholder="example@gmail.com"
          />
          <span style={{color:'red'}}>{errors.email}</span>
        </div>
        <br/>
        <div className="password">
          <label className="texto">PASSWORD</label>
          <input className="inputs"
            name="password"
            type="password"
            value={userData.password}
            onChange={inputHandler}
            placeholder="Password"
          />
        {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
        </div>
        <br/>
        <div className="boton-submit">
        <button className="submit" disabled={diseableHandler()} type="submit">
          SUBMIT
        </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
