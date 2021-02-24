import React, { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";
import styles from "../../styles/components/CountDown.module.css";

let countDownTimeOut: NodeJS.Timeout;

export const CountDown: React.FC = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, MinuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, SecondRight] = String(seconds).padStart(2, "0").split("");

  const startCountDown = () => {
    setIsActive(true);
  };

  const resetCountDown = () => {
    clearTimeout(countDownTimeOut);
    setIsActive(false);
    setTime(0.1 * 60);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span> {minuteLeft} </span>
          <span> {MinuteRight} </span>
        </div>
        <span> : </span>
        <div>
          <span> {secondLeft} </span>
          <span> {SecondRight} </span>
        </div>
      </div>
      {hasFinished ? (
        <button className={styles.countDownButton} disabled>
          Ciclo encerrado <img src="/icons/level.svg" alt="" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countDownButton}
              onClick={startCountDown}
            >
              Iniciar Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};
