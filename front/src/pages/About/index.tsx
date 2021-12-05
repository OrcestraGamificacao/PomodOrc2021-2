import React from 'react';
import './style.css';
import Foto_Victorio from '../../photos/Foto_Victorio.jpg';
import Foto_Maria from '../../photos/Foto_Maria.jpg';
import Foto_Pedro from '../../photos/Foto_Pedro.jpg';
import Foto_Matheus from '../../photos/Foto_Matheus.jpg';

function About() {
  return ( 
    <div className="About">
      <a href="/" className="Logo">
          <text id="pomod">POMOD</text>
          <text id="orc">ORC</text>
      </a>
      <main>
        <span id="Proposta">
          <div className="title">
            <h1>Proposta</h1>
          </div>
          <div className="texts">
            <p> O nosso projeto consiste em um <strong>organizador de tarefas</strong> baseado na <strong>Técnica
              Pomodoro</strong>, que constitui-se na divisão de tempo
              dedicado a tarefas a fim de melhorar a <strong>produtividade</strong>.
            </p>
          </div>
        </span>
        <div className="linhaVertical"></div>
        <span id="QuemSomos">
          <div className="title">
            <h1>Equipe</h1>
          </div>
          <div className="texts">
            <p>A nossa equipe é composta por 
              <strong>quatro membros</strong>, 
              todos <strong>trainees</strong> 
              da <strong>Orc'estra Gamificação</strong>, 
              uma <strong>empresa júnior</strong> 
              formada e gerida por alunos da 
              <strong>Faculdade do Gama</strong>, 
              da <strong>Universidade de Brasília</strong>.
            </p>
          </div>
        </span>
      </main> 
      <div id="FotosGp">
        <picture>
          <div id="Maria">
            <img src={ Foto_Maria }/>
            <a target="_blank" href="https://github.com/MariaAbritta"><text id="name">Maria Abritta</text></a>
          </div>
          <div id="Victorio">
            <img src={ Foto_Victorio }/>
            <a target="_blank" href="https://github.com/Victor-oss/"><text id="name">Victorio Lázaro</text></a>
          </div>
          <div id="Pedro">
            <img src={ Foto_Pedro }/>
            <a target="_blank" href="https://github.com/pedrobarbosaocb"><text id="name">Pedro Barbosa</text></a>
          </div>
          <div id="Matheus">
            <img src={ Foto_Matheus }/>
            <a target="_blank" href="https://github.com/Morinishi15"><text id="name">Matheus Ribeiro</text></a>
          </div>
        </picture>
      </div>
        <div className="back-button">
          <a href="/" id="back">VOLTAR</a>
        </div>
    </div>
  );
}

export default About;