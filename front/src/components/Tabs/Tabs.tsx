import React from 'react';
import { number } from 'prop-types';

import * as S from './Tabs.style';

var repeat = 0;
var removeRepeat = 0;

type TabsProps = {
  activeItem: number,
}

function Tabs({ activeItem }: TabsProps): JSX.Element {
  
  if (activeItem == 1) {
    if (repeat > 1) {
      alert("Pomodoro")
    } else {
      repeat += 1;
    }
  } else if (activeItem == 2){
    alert("Inicio do Intervalo Curto")
  } else if (activeItem == 3){
    alert("Inicio do Intervalo Longo")
  };
  
  return (
    
    <S.TabsWrapper>
      <S.Tabs positionOfActiveItem={activeItem}>
        <S.Tab>
          Pomodoro
        </S.Tab>
        <S.Tab>
          Pausa Curta
        </S.Tab>
        <S.Tab>
          Pausa Longa
        </S.Tab>
      </S.Tabs>
    </S.TabsWrapper>
  );
}

Tabs.propTypes = {
  activeItem: number,
}

export default Tabs;
