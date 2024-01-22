import React from 'react';
import './App.css'; // Certifique-se de importar o arquivo CSS

const Galeria = () => {
  return (
    <section id="knowledge">
    <div className="wrapper">
      <header>
        <h2>Fotos no PTI</h2>
      </header>
      <div className="content">
        <div className="col-b">
          <style>
            {`
              /* Estilos CSS */
              .imagem-com-espaco {
                margin: 10px; /* Adicione a quantidade de espaço desejada em pixels */
              }
            `}
          </style>
          <img
            src="https://i.ibb.co/FJzmjZG/Whats-App-Image-2023-10-19-at-22-07-46-2-1.jpg"
            alt="Imagem de Bruna Feyh no PTI"
            width="300"
            height="350"
            className="imagem-com-espaco"
          />
          <p>Eu, no ônibus do PTI</p>
        </div>

        <div className="col-b">
          <style>
            {`
              /* Estilos CSS */
              .imagem-com-espaco {
                margin: 20px;
              }
            `}
          </style>
          <img
            src="https://i.ibb.co/tpQtSLB/Whats-App-Image-2023-10-20-at-12-54-30-2.jpg"
            alt="Imagem de Bruna e Andre Cano no PTI"
            width="300"
            height="225"
            className="imagem-com-espaco"
          />
          <p>Eu e o meu amigo André no PTI</p>
        </div>

        <div className="col-b">
          <style>
            {`
              /* Estilos CSS */
              .imagem-com-espaco {
                margin: 20px; /* Adicione a quantidade de espaço desejada em pixels */
              }
            `}
          </style>
          <img
            src="https://i.ibb.co/bWZpDJX/Whats-App-Image-2023-10-20-at-10-44-56-2.jpg"
            alt="Imagem do PTI"
            width="300"
            height="350"
            className="imagem-com-espaco"
          />
          <p>O PTI</p>
        </div>
      </div>
    </div>
  </section>
  );
};


export default Galeria;
