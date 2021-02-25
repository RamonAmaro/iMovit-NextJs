import Head from "next/head";
import React from "react";
import {
  ChallengeBox,
  CompletedChallenges,
  ExperienceBar,
  Profile,
} from "../components";
import { CountDown } from "../components/CountDown";
import { CountDownProvider } from "../context/CountDownContext";
import styles from "../styles/Pages/Home.module.css";

export default function Home() {
  return (
    <CountDownProvider>
      <div className={styles.container}>
        <Head>
          <title> Inicio | IMovit </title>
        </Head>
        <ExperienceBar />

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
      </div>
    </CountDownProvider>
  );
}
