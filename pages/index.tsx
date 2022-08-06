import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import AchievementCard from "../Components/Home/AchievementCard";
import InventoryCard from "../Components/Home/InventoryCard";
import ProfileCard from "../Components/Home/ProfileCard";
import Layout from "../Components/Layout/Layout";
import { Store } from "../Data/Store/Store";

const Home: NextPage = () => {
  const { state, dispatch } = useContext(Store);

  const { answer, currantQuestionId } = state;

  const totalCorrectAns = answer?.filter(
    (list: { correct: boolean }) => list.correct
  ).length;
  const totalWrongAns = answer?.filter(
    (list: { correct: boolean }) => !list.correct
  ).length;
  const totalAnswer = answer.length;
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <main className=" relative">
        <div className=" absolute hidden  dark:block -top-12   -right-52 h-32 w-5/6 bg-sky-600/20 rotate-45  blur-3xl "></div>

        <div className=" absolute hidden dark:block  bottom-12  -left-80 h-32 w-5/6  rotate-45  blur-3xl bg-sky-500/20 "></div>
        <div className=" absolute hidden dark:block  top-0 left-52 h-56 w-56 rounded-full  rotate-45  blur-3xl bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-sky-500/30 "></div>
        <div className="">
          <ProfileCard
            totalCorrectAns={totalCorrectAns}
            totalWrongAns={totalWrongAns}
            totalAnswer={totalAnswer}></ProfileCard>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mx-8">
          <AchievementCard
            totalCorrectAns={totalCorrectAns}
            totalAnswer={totalAnswer}></AchievementCard>

          <InventoryCard
            totalCorrectAns={totalCorrectAns}
            totalWrongAns={totalWrongAns}
            totalAnswer={totalAnswer}></InventoryCard>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
