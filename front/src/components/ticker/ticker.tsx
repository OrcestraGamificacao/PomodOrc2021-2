import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction } from 'react';
import 'prop-types';

import useWindowSize from "@rooks/use-window-size"
import cyclesContext from '../../contexts/cycles.context'; 
import { 
    remainingTimeInMinutes,
    remainingTimeInSeconds } from '../../utils/support';
import * as S from '../ticker.style.css';

  type TickerProps = {
  setPomodOrcCycleType: Dispatch<SetStateAction<number>>,
}

function Ticker({ setPomodOrcCycleType }: TickerProps){
  const { width } = useWindowSize();
  const orderedCycles = useContext(cyclesContext);

  const [remainingTime, setRemainingTime] = useState(orderedCycles[0].duration);
  const [remainingMin, setRemainingMin] = useState<number | string>(0);
  const [remainingSecs, setRemainingSecs] = useState<number | string>(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [pomodOrcCycles, setPomodOrcCycles] = useState(0);
  const [gagePercentual, setGagePercentual] = useState(0);

  const stopTicker = () => setIsTimeRunning(false);
  const playTicker = () => setIsTimeRunning(true);
  const restartTicker = () => {
    updateInformation(0);
    stopTicker();
    setPomodOrcCycles(0);
  };

  const updateInformation = (pomodOrcCycle: number) => {
    setRemainingTime(orderedCycles[pomodOrcCycle].duration);
    setPomodOrcCycleType(orderedCycles[pomodOrcCycle].type);
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

      return () => clearInterval(interval);
    }
  }, [isTimeRunning]);

  useEffect(() => {
    setRemainingMin(remainingTimeInMinutes(remainingTime));
    setRemainingSecs(remainingTimeInSeconds(remainingTime));
    setGagePercentual( (100 - (remainingTime * 100 / orderedCycles[pomodOrcCycles].duration)) / 100 );

    const cycleEnded = remainingTime === 0;
    if (cycleEnded) {
      stopTicker();
      setPomodOrcCycles(previousState => previousState + 1);
    }
  }, [remainingTime]);

  useEffect(() => {
    const firstCycle = pomodOrcCycles < 1;
    const haveToRestart = pomodOrcCycles > 5;

    if (!firstCycle) {
      if (haveToRestart) {
        restartTicker();
        return;
      }
      updateInformation(pomodOrcCycles);
      playTicker();
    }
  }, [pomodOrcCycles]);

  const gageRef = useRef<HTMLDivElement>(null);
  const [gageCircleDiameter, setGageCircleDiameter] = useState<number>(0);
  const [gageCircleRadius, setGageCircleRadius] = useState<number>(0);

  const setGageDimensions = () => {
    if (!gageRef.current || !gageRef.current.clientWidth) return;
    const gageWrapperWidth = gageRef.current.clientWidth;
    setGageCircleDiameter(gageWrapperWidth - 40);
    setGageCircleRadius(gageCircleDiameter / 2);
  };

  useEffect(() => {
    setGageDimensions();
  }, [gageRef.current, width]);

  return (
    <S.ClockWrapper>
      <S.Frame>
        <S.Inside>
          <S.Content>
            <S.Time
              fontSizeInPixels={Math.round(gageCircleDiameter / 3.33)}
            >
              {`${remainingMin}:${remainingSecs}`}
            </S.Time>
            <S.Button
              fontSizeInPixels={Math.round(gageCircleDiameter / 12)}
              marginTop={Math.round(gageCircleDiameter * 0.03)}
              onClick={handleClick}
            >
              { isTimeRunning ? 'Pause' : 'Start' }
            </S.Button>
          </S.Content>
          <S.Gauge
            circleDiameter={gageCircleDiameter}
            percentualPassed={gagePercentual}  
            ref={gageRef}
          >
            { gageCircleRadius > 0 && (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r={gageCircleRadius}/>
              </svg>
            )}
          </S.Gauge>
        </S.Inside>
      </S.Frame>
    </S.ClockWrapper>
  );

  Ticker.propTypes = {
    setPomodOrcCycleType: func,
  }
  
  export default Ticker;

};