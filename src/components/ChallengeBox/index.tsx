import React, { useContext } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";
import { CountDownContext } from "../../context/CountDownContext";
import styles from "../../styles/components/ChallengeBox.module.css";

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountDown } = useContext(CountDownContext);

  const handleChallengSuccess = () => {
    completeChallenge();
    resetCountDown();
  };
  const handleChallengFailed = () => {
    resetChallenge();
    resetCountDown();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong> Novo desafio </strong>
            <p> {activeChallenge.description} </p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucessededButton}
              onClick={handleChallengSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo para receber um novo desafio
            <p>
              <img src="icons/level-up.svg" alt="levelup" />
              Avançe de level completando desafios.
            </p>
          </strong>
        </div>
      )}
    </div>
  );
};
