import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import {
  ChallengeBox,
  CompletedChallenges,
  ExperienceBar,
  Profile,
} from "../components";
import { CountDown } from "../components/CountDown";
import { ChallengesProvider } from "../context/ChallengesContext";
import { CountDownProvider } from "../context/CountDownContext";
import styles from "../styles/Pages/Home.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title> Inicio | IMovit </title>
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div className="">
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
