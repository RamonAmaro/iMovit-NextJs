import React from "react";
import styles from "../../styles/components/Profile.module.css";

export const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ramonamaro.png" alt="RamonAmaro" />
      <div>
        <strong> Ramon Amaro </strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  );
};
