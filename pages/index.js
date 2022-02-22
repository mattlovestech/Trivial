import Head from 'next/head'

import styles from '../styles/Home.module.css'
import AnswerBox from "../components/answerBox";
import ProgressTopBar from "../components/progress";
import LinearWithValueLabel from "../components/progress";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import QuizNavBar from "../components/quizNavBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GetStartedFlow from "../components/getStartedFlow";
import {Typography} from "@mui/material";

export default function Home() {
  const data = [
"https://www.wallpapersun.com/wp-content/uploads/2020/10/White-Wallpaper-7.jpg"
  ]
  return (
    // <div className={styles.container} style={{backgroundImage:`url(` + data[0] +`)`}}>
        <div className={styles.container}>

        <Head>
        <title>Trivial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br/>
      <div style={{opacity: .2}}> <LinearWithValueLabel /> </div>

      <br/>
      <QuizNavBar/>



    <br/>
        <div style={{textAlign: "center",  borderRadius: "25px"}}>

            <h1 className={styles.title}>
                Social media style quizzes, but you're in control
            </h1>
            <a className={styles.description}>Create your own social media style quizzes that are shareable and you get to see all the data</a>
            <br/>
            <br/>
            <Button color={"secondary"} variant={"contained"} href={"/quiz"}>Create My Quiz</Button>

        </div>




        <br/>
        <br/>
        <GetStartedFlow/>



      <footer className={styles.footer}>

          Create by @mattlovestech with love


      </footer>
    </div>
  )
}
