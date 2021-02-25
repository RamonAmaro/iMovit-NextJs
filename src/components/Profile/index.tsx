import React, { useContext } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";
import styles from "../../styles/components/Profile.module.css";

export const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ramonamaro.png" alt="RamonAmaro" />
      <div>
        <strong> Ramon Amaro </strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
