import './App.css';
import Contador from './Componentes/Contador.jsx';
import Boton from './Componentes/Boton.jsx';
import LogoCode from './Imagenes/1.png';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className="logo"
          src={LogoCode}
          alt='Logo'/>
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics}/>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
