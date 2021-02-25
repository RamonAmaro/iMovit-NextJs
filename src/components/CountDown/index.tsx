import React, { useContext } from "react";
import { CountDownContext } from "../../context/CountDownContext";
import styles from "../../styles/components/CountDown.module.css";

export const CountDown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown,
  } = useContext(CountDownContext);

  const [minuteLeft, MinuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, SecondRight] = String(seconds).padStart(2, "0").split("");

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
