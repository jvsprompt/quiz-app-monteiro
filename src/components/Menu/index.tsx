import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/menu.css';
import eletric from '../../assets/images/provas/eletric.jpg';
import hvac from '../../assets/images/provas/hvac.jpg';
import logo from '../../assets/images/logo/logo.png';

const Menu: React.FC = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1 className="heading">
            Selecione <span></span>uma Prova
          </h1>
          <p className="sub-heading">Grupo Monteiro</p>
        </div>
      </header>
      <article className="content">
        <div className="container">
          <div className="cards">
            <div className="card">
              <img src={eletric} alt="Elétrica Básica" className="ui-preview" />
              <div className="ui-details">
                <h4>Elétrica Básica</h4>
                <p>17 Questões em 30 Minutos.</p>
              </div>
              <Link to="/eletrica" className="btn btn-view">
                Abrir
              </Link>
            </div>
            <div className="card">
              <img src={hvac} alt="Refrigeração Básica" className="ui-preview" />
              <div className="ui-details">
                <h4>Refrigeração Básica</h4>
                <p>10 Questões em 20 Minutos.</p>
              </div>
              <Link to="/refrigeracao" className="btn btn-view">
                Abrir
              </Link>
            </div>
          </div>
        </div>
      </article>
      <footer>
        <div className="container">
          <p></p>
          <div className="github-logo">
            <a href="">
              <img src={logo} alt="Github Logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
