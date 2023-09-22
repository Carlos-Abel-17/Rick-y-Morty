import '../css/StyleAbout.css'
import MiFoto from '../img/perfil.jpg'


function About() {
  return (
    <>
    <div id="principal">
      <div className='div-uno'>
        <div className='caja-de-foto'>
      <img id='foto' src={MiFoto} alt="" />
        </div>
      </div>
      <div className='div-dos'>
        <div className='caja-de-datos'>
          <div id='caja-blanca'>
           <h2>Mi Nombre:</h2>
           <p>Carlos Abel Aguado Ramos</p>
           <h2>Nacionalidad:</h2>
           <p>Perú</p>
           <h2>A que me dedico:</h2>
           <p>Developer Full Stack</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
