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
import Quiz from "./quiz/quiz";

export default function Home() {
    let data = {

        "deal777": {
            "answers": {
                "0": {
                    "answer": "New York",
                    "correct": false
                },
                "1": {
                    "answer": "Arizona",
                    "correct": false
                },
                "2": {
                    "answer": "California",
                    "correct": true
                },
                "3": {
                    "answer": "New Mexico",
                    "correct": false
                }
            },
            "backgroundURL": "https://i.pinimg.com/originals/79/98/76/79987683faf27c0c4ddb2e57f2bfddac.gif",
            "correctAnswer": "3",
            "question": "What state is Apple Corp. headquartered in?",
            "questionColor": "#000392",
            "user": {
                "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
                "name": "quizID",
                "uid": "24905u4839",
            }}

    }

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




    <br/>
        <div style={{textAlign: "center",  borderRadius: "25px"}}>

            <h1 className={styles.title}>
                {"Social media style quizzes, but you're in control"}
            </h1>
            <a className={styles.description}>Create social media style quizzes that can be shared anywhere</a>
            <br/>
            <br/>
            <Button color={"secondary"} variant={"contained"} href={"/quiz"}>Create My Quiz</Button>
            <br/>
            <br/>
        </div>
            <div style={{marginRight: "1%",
                marginLeft: "1%",

                textAlign: "center"}}>
                <Quiz resultsArray={data}/>
            </div>





            <br/>
        <br/>
        <GetStartedFlow/>




      <footer className={styles.footer}>

          Created by @mattlovestech with love 🥰


      </footer>
    </div>
  )
}
