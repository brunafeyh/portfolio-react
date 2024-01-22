import React from 'react';
import './App.css'; // Certifique-se de importar o arquivo CSS

const Home = () => {
  return (
    <section id="home">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h4>Olá 👋🏾</h4>
            <h1>Sou a Bruna Feyh,</h1>
          </header>
          <div className="content">
            <p className="line typing">Desenvolvedora Júnior</p>
            <a className="button" href="#contact">
              Entre em contato comigo
            </a>
          </div>
        </div>
        <div className="col-b">
          <img
            src="https://i.ibb.co/Z2fLBKZ/365665344-3399784790285668-824557442727092291-n.jpg"
            alt="Imagem de Bruna Feyh no PTI"
          />
        </div>
      </div>
    </section>
  );
};


export default Home;
