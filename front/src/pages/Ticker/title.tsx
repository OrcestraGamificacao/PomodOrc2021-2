import React, { useState } from 'react';
import Tabs from 'components/Tabs/Tabs';
import Clock from 'components/Clock/Clock';
import * as S from '../../components/App/App.style';


function Title(): JSX.Element {

  const [pomodoroCycleType, setPomodoroCycleType] = useState<number>(1);
  return (
    <S.Container>
      <S.MainTitle>
        
        <a href="/">
          <text id="Pomod">Pomod</text><text id="Orc">Orc</text>
        </a>
      </S.MainTitle>
      <Tabs activeItem={pomodoroCycleType} />
      <Clock 
        setPomodOrcCycleType={setPomodoroCycleType}
      />
      <S.GoBack>
        <a href="/" className="init">
          <text>Voltar</text>
        </a>
      </S.GoBack>
      <footer className="footer">
        ©CyberOrc
      </footer>     
    </S.Container>
  );
}

export default Title;