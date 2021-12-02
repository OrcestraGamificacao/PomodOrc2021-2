import React, { useState } from 'react';
import Tabs from 'components/Tabs/Tabs';
import Clock from 'components/Clock/Clock';
import * as S from '../../components/App/App.style';


function Title(): JSX.Element {

  const [pomodoroCycleType, setPomodoroCycleType] = useState<number>(1);
  return (
    <S.Container>
      <S.MainTitle>PomodOrc</S.MainTitle>
      <Tabs activeItem={pomodoroCycleType} />
      <Clock 
        setPomodOrcCycleType={setPomodoroCycleType}
      />
         
    </S.Container>
  );
}

export default Title;