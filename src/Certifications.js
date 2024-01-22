import React from 'react';
import './App.css'; // Certifique-se de importar o arquivo CSS

const Certifications = () => {
    return (
      <section id="knowledge">
        <div className="wrapper">
          <header>
            <h2>Certificações</h2>
          </header>
          <div className="content">
            <div className="cards">
              <div className="card">
                <h3>Desenvolvimento Web</h3>
                <p>
                Curso de desenvolvimento web, incluindo HTML5, CSS3, Bootstrap 4, JavaScript (ES6, ES7, jQuery), PHP 7, MySQL, MVC, API (com Slim), Ionic, e WordPress, além de tópicos avançados, como publicação na web, SaaS e desenvolvimento mobile pela Udemy.
              </p>
              </div>
              <div className="card">
                <h3>POO em Java</h3>
                <p>
                Curso de Programação Orientada a Objetos em Linguagem Java: UML, JavaFX, Spring Boot, JPA, Hibernate, SQL (JDBC) e ORM (JPA/Hibernate), MongoDB pela Udemy.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };


export default Certifications;
