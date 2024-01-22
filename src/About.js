import React from 'react';
import './App.css'; // Certifique-se de importar o arquivo CSS

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h2>Sobre mim</h2>
          </header>
          <div className="content">
            <p align="justify">
                Meu nome é Bruna Carolina da Silva Feyh, sou natural do Paraná e tenho 20 anos. Atualmente, estou cursando Ciência da Computação na UNIOESTE, mais especificamente no campus de Foz do Iguaçu, situado dentro do Parque Tecnológico Itaipu. Tenho uma paixão pela área de programação e estou constantemente buscando expandir meu conhecimento. <br /><br />
                Minhas habilidades incluem:
                <ul>
                  <li>Conhecimento em linguagens de programação, como C, C++, Java e JavaScript;</li>
                  <li>Experiência em desenvolvimento web, incluindo HTML5, CSS3, Bootstrap 4, JavaScript (ES6, ES7, jQuery), PHP 7, MySQL, MVC, API (com Slim), Ionic, e WordPress;</li>
                  <li>Experiência em programação orientada a objetos em linguagem Java, incluindo UML, JavaFX, Spring Boot, JPA, Hibernate, SQL (JDBC) e ORM (JPA/Hibernate), MongoDB.</li>
                </ul>
                Estou entusiasmada em aplicar essas habilidades no desenvolvimento de soluções criativas e funcionais. Estou comprometida em continuar meu crescimento na área de tecnologia e programação, buscando oportunidades para aprimorar minhas habilidades e contribuir para projetos desafiadores.
            </p>
          </div>
        </div>
        <div className="col-b">
          <img
            src="https://i.ibb.co/Jrtg9j4/Whats-App-Image-2023-10-19-at-22-07-46-3.jpg"
            alt="Imagem de Bruna Feyh no PTI"
          />
        </div>
      </div>
    </section>
  );
};


export default About;
