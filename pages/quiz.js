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

export default function Quiz() {
    const data = [
        'https://media3.giphy.com/media/Z69UDgjfRMjsY/giphy.gif?cid=ecf05e47b75zu0hixuugha9hr9hanmrdgfgw4jvgct01ffvt&rid=giphy.gif&ct=g',
        "https://media4.giphy.com/media/kqBmbzAA3hBwb6Aw42/giphy.gif?cid=ecf05e47196j4zsr9mx463mgv2sjufr2k9q6q93f80kcb4os&rid=giphy.gif&ct=s"

    ]
    return (
        <div className={styles.container} style={{backgroundImage:`url(` + data[0] +`)`,
            height: "100vh"
        }}>
            <Head>
                <title>Trivial</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <br/>
            <LinearWithValueLabel/>
            <br/>
            <QuizNavBar/>
            <br/>
            <br/>
            <div  style={{textAlign: "center"}}>
                <img height="160px"

                     alt="hbcu gif text"
                     src={data[1]}/>
            </div>
            <br/>

            <AnswerBox/>

        </div>
    )
}
