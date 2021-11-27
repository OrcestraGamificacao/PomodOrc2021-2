import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction } from 'react';
import 'prop-types';


import cyclesContext from '../../contexts/cycles.context'; 
import { 
    remainingTimeInMinutes,
    remainingTimeInSeconds } from '../../utils/support';
import './ticker.style.css';

type TickerProps = {
  setPomodOrcCycleType: Dispatch<SetStateAction<number>>,
}

function Ticker({ setPomodOrcCycleType }: TickerProps): {
  const orderedCycles = useContext(cyclesContext);

  const [remainingTime, setRemainingTime] = useState(orderedCycles[0].duration);
  const [remainingMin, setRemainingMin] = useState<number | string>(0);
  const [remainingSecs, setRemainingSecs] = useState<number | string>(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [pomodOrcCycles, setPomodOrcCycles] = useState(0);
  const [gaugePercentual, setGaugePercentual] = useState(0);

  const stopTicker = () => setIsTimeRunning(false);
  const playTicker = () => setIsTimeRunning(true);
  const restartClock = () => {
    updateCycleInformation(0);
    stopTicker();
    setPomodOrcCycles(0);
  };

  const updateCycleInformation = (pomodOrcCycle: number) => {
    setRemainingTime(orderedCycles[pomodOrcCycle].duration);
    setPomodOrcCycleType(orderedCycles[pomodOrcCycle].type);
  };

  const handleClick = () => {
    setIsTimeRunning(!isTimeRunning);
  }
};