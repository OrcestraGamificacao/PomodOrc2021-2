import React, { useState } from 'react';
import Tabs from 'components/Tabs/Tabs';
import Clock from 'components/Clock/Clock';
import * as S from './App.style';
import * as H from '../../index'
import { Router } from "../../routes"

function App(): JSX.Element {

  const [pomodoroCycleType, setPomodoroCycleType] = useState<number>(1);
  return (
    <Router/>
  );
}


export default App;
