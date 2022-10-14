import './App.css';
import Testimonio from './Componentes/Testimonio.jsx'; 

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Frases</h1>
      <Testimonio 
        nombre ="Darth Vader"
        pais ="Tatooine"
        imagen ="1"
        cargo ="Lider Supremo"
        empresa ="Primera Orden"
        testimonio= "Ten cuidado de no ahogarte con tus aspiraciones"/>
      <Testimonio
        nombre ="Hitler"
        pais ="Alemania"
        imagen ="2"
        cargo ="Fuhrer"
        empresa ="Nacismo"
        testimonio= "Debe procurar que sólo engendren hijos los individuos sanos, porque el hecho de que personas enfermas o incapaces pongan hijos en el mundo es una desgracia, en tanto que el abstenerse de hacerlo es un acto altamente honroso"/>
      <Testimonio
        nombre ="Iroh"
        pais ="Reino Fuego"
        imagen ="3"
        cargo ="Comandante"
        empresa ="Milicia"
        testimonio= "EL DESTINO ES ALGO EXTRAÑO, NUNCA SE SABE CÓMO VAN A RESULTAR LAS COSAS: PERO SI MANTIENES TU MENTE Y CORAZÓN ABIERTOS, TE PROMETO QUE ENCONTRARÁS TU PROPIO DESTINO ALGÚN DÍA"/>
      </div>
    </div>
  );
}

export default App;
