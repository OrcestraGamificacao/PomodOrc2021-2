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
          <div>
            <h1>Proposta</h1>
          </div>
          <div>
            <p> O nosso projeto consiste em um
              organizador de tarefas baseado na Técnica
              Pomodoro, que constitui-se na divisão de tempo
              dedicado a tarefas a fim de melhorar a produtividade.
            </p>
          </div>
        </span>
        <div className="linhaVertical"></div>
        <span id="QuemSomos">
          <div>
            <h1>Quem Somos</h1>
          </div>
          <div>
            <p>A nossa equipe
            é composta por quatro membros,
            todos trainees da empresa júnior Orc'estra
            Gamificação.
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