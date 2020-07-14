import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponenete from './componentes/MiComponente';



{/*function HolaMundo(nombre,edad){
  var presentacion=<div>
    <h2>Hola, soy {nombre}</h2>
    <h2>Tengo {edad} años</h2>
  </div>
  return presentacion;
 
}*/
}


function App() {
  var nombre ="Rocibel Alvarado";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hola Rocibel hola</h1>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
      </header>
      
    </div>
  );
}

export default App;
