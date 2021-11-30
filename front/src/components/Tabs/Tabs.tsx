import React from 'react';
import { number } from 'prop-types';

import * as S from './Tabs.style';

type TabsProps = {
  activeItem: number,
}

function Tabs({ activeItem }: TabsProps): JSX.Element {
  return (
    <S.TabsWrapper>
      <S.Tabs positionOfActiveItem={activeItem}>
        <S.Tab>Pomodoro</S.Tab>
        <S.Tab>Short break</S.Tab>
        <S.Tab>Long break</S.Tab>
      </S.Tabs>
    </S.TabsWrapper>
  );
}

Tabs.propTypes = {
  activeItem: number,
}

export default Tabs;
