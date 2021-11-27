
import { BaseSyntheticEvent } from 'react';import React, {
    useContext,
    useEffect,
    useRef,
    useState,
    Dispatch,
    SetStateAction } from 'react';
import { func } from 'prop-types';
import cyclesContext from '../../contexts/cycles.context'; 
import { 
    remainingTimeInMinutes,
    remainingTimeInSeconds } from '../../utils/support';
import './ticker.style.css';

const orderedCycles = useContext(cyclesContext);

const [remainingTime, setRemainingTime] = useState(orderedCycles[0].duration);
const [remainingMinutes, setRemainingMinutes] = useState<number | string>(0);
const [remainingSeconds, setRemainingSeconds] = useState<number | string>(0);
const [isTimeRunning, setIsTimeRunning] = useState(false);
const [pomodoroCycles, setPomodoroCycles] = useState(0);
const [gaugePercentual, setGaugePercentual] = useState(0);

const stopClock = () => setIsTimeRunning(false);
const playClock = () => setIsTimeRunning(true);
const restartClock = () => {
  updateCycleInformation(0);
  stopClock();
  setPomodoroCycles(0);
};
const updateCycleInformation = (pomodoroCycle: number) => {
  setRemainingTime(orderedCycles[pomodoroCycle].duration);
  setPomodoroCycleType(orderedCycles[pomodoroCycle].type);
};

const handleClick = () => {
  setIsTimeRunning(!isTimeRunning);
}

React.useEffect(() => {
  if (isTimeRunning) {
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev === 0) return prev;
        return prev - 1;
      });
    }, 1000);

