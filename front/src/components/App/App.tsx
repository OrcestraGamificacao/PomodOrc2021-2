import React, { useState } from 'react';
import Tabs from 'components/Tabs/Tabs';
import Clock from 'components/Clock/Clock';
import * as S from './App.style';
import * as H from '../../index'


function App(): JSX.Element {

  const [pomodoroCycleType, setPomodoroCycleType] = useState<number>(1);
  return (
    <S.Container>
      <S.MainTitle>Pomod</S.MainTitle>
      <S.MainTitle className='Orc'>Orc</S.MainTitle>
      <Tabs activeItem={pomodoroCycleType} />
      <Clock 
        setPomodOrcCycleType={setPomodoroCycleType}
      />
      <div className="buttons">
      <a href="#" id="init">Iniciar</a>
        <div className="vl"></div>
        <a href="#" id="about">Sobre</a>
      </div>
      
    </S.Container>
  );
}

export default App;
