import React from 'react';
import './styles.css';

function Home() {
  return (
    <div>
      <div className="Home">
        <header className="Home-header">
          <text id="pomod">POMOD</text>
          <text id="orc">ORC</text>
        </header>
        <div className="buttons">
          <a href="/Lista" id="init">Iniciar</a>
          <div className="vl"></div>
          <a href="/About" id="about-page">Sobre</a>
        </div>
      </div>
    </div>
  );
}

export default Home;