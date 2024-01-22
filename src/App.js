import React from 'react';
import './App.css'; // Certifique-se de importar seus estilos CSS aqui
import Portifolio from './Portifolio';
import Home from './Home';
import About from './About';
import Certifications from './Certifications';
import Navegation from './Navegation';
import Galeria from './Galeria';
import Contato from './Contato';
import Rodape from './Rodape';

const App = () => {
  return (
    <>
    <Navegation/>
    <Home/>
    <About/>
    <Certifications/>
    <Portifolio/>
    <Galeria/>
    <Contato/>
    <Rodape/>
    </>
  );
};

export default App;
