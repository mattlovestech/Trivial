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
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AnswersBox, {blankQuizButton, correctQuizButton, incorrectQuizButton} from "../components/answersBox";
import Box from "@mui/material/Box";
import {ArrowBack, ArrowBackIos, ArrowForward, ArrowForwardIos, ArrowRight, Create} from "@mui/icons-material";
import Grid from "@mui/material/Grid";



export default function Quiz() {
    let update = [incorrectQuizButton,correctQuizButton,incorrectQuizButton,incorrectQuizButton]
    let quizButton = [blankQuizButton,blankQuizButton,blankQuizButton,blankQuizButton]
    let buttonStyle = incorrectQuizButton
    const data = [
        'http://tile.loc.gov/image-services/iiif/service:pnp:highsm:47500:47503/full/pct:25/0/default.jpg',
        "https://media4.giphy.com/media/QIjTUK2dJUUTFCGbCN/giphy.gif?cid=ecf05e47puiw7fxmku2hm4x6qjmsvtjlnxuv3tadmccdi7zn&rid=giphy.gif&ct=s"

    ]
    const theme = createTheme({
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#fff',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#ffcc00',
            },
            // Used by `getContrastText()` to maximize the contrast between
            // the background and the text.
            contrastThreshold: 3,
            // Used by the functions below to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
            tonalOffset: 0.2,
        },
    });
    const [progress, setProgress] = React.useState(1);
    const [questionNumber, setQuestionNumber] = React.useState(0);
    let answers;
    let ResultsArray = {

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
                       "answer": "Atlanta",
                       "correct": false
                   }
               },
               "backgroundURL": "https://media4.giphy.com/media/QIjTUK2dJUUTFCGbCN/giphy.gif?cid=ecf05e47puiw7fxmku2hm4x6qjmsvtjlnxuv3tadmccdi7zn&rid=giphy.gif&ct=s",
               "correctAnswer": "3",
               "question": "What state is Apple Corp. headquartered in?",
               "questionColor": "#000392"},
        "deal7771": {
            "answers": {
                "0": {
                    "answer": "Albany",
                    "correct": false
                },
                "1": {
                    "answer": "Georgia City",
                    "correct": false
                },
                "2": {
                    "answer": "Augusta",
                    "correct": false
                },
                "3": {
                    "answer": "Atlanta",
                    "correct": true
                }
            },
            "backgroundURL": "https://media4.giphy.com/media/QIjTUK2dJUUTFCGbCN/giphy.gif?cid=ecf05e47puiw7fxmku2hm4x6qjmsvtjlnxuv3tadmccdi7zn&rid=giphy.gif&ct=s",
            "correctAnswer": "1",
            "question": "What is the capitol of Georgia?",
            "questionColor": "red"}

    }
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
        }, 100);
        console.log(progress)
        return () => {
            clearInterval(timer);
        };
    }, []);
    function progressSet() {

        setProgress(100)

    }
    function goForward() {
        setProgress(0)
        setQuestionNumber(questionNumber + 1)
    }
    function goBack() {
        switch(progress) {
            case -2:
            case -1:
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                setQuestionNumber(questionNumber - 1)
                break;
            default:
                setProgress(-2)
        }
    }
    function handleStyle(correctBool) {
if (correctBool) {
    return correctQuizButton
} else {
    return incorrectQuizButton
}

    }
    if (progress === 100) {
        answers = Array(~~(4)).fill(4).map( (key,index) =>

            (<Button key={index} style={handleStyle(ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["correct"])}
                     variant={"contained"}>
                <Avatar sx={{ background: handleStyle(ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["correct"])["background"],
                    color: handleStyle(ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["correct"])["color"],
                    border: handleStyle(ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["correct"])["border"],
                    width: 24,
                    height: 24,
                    marginRight: "15px"}}
                        alt={String.fromCharCode(65 + index)}
                        src="/static/images/avatar/1.jpg" />
                {ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["answer"]}
            </Button>)
        )
    } else {
        answers = Array(~~(4)).fill(4).map( (key,index) =>

            (<Button key={index} onClick={progressSet}   style={blankQuizButton}
                     variant={"contained"}>
                <Avatar sx={{ background: quizButton[index]["background"], color: quizButton[index]["color"], border:quizButton[index]["border"], width: 24, height: 24, marginRight: "15px"}} alt={String.fromCharCode(65 + index)} src="/static/images/avatar/1.jpg" />
                {/*{answers[index]}*/}
                {ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["answer"]}
            </Button>)


        )
    }

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
            <LinearWithValueLabel progress={progress}/>
            <br/>
            <QuizNavBar quizName="@mattlovestech's Quiz"/>

            <div  style={{textAlign: "center", opacity: .01}}>
                <img height="140px"

                     alt="hbcu gif text"
                     src={data[1]}/>
            </div>
            <div style={{marginLeft: "0%", marginRight: "0%"}}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>
                <ArrowBackIos  onClick={() => goBack()} style={{color: "white", fontSize: "20px"}}/>
                <div>
                    <Box style={{color: "white", padding: "5px 15px 5px 15px",textAlign: "center",
                        background: ResultsArray[Object.keys(ResultsArray)[questionNumber]]["questionColor"],
                        borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>
                        {/*<h3>{ResultsArray["deal777"]["question"]}</h3>*/}
                        <h3>{ResultsArray[Object.keys(ResultsArray)[questionNumber]]["question"]}</h3>
                    </Box>
                    <Box style={{textAlign: "center",
                        background: "rgba(255, 255, 255, 0.3)",
                        borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px"}}>
                        <br/>{answers}<br/><br/>
                    </Box>
                </div>
                    <ArrowForwardIos onClick={() => goForward()} style={{color: "white", fontSize: "20px"}}/>
                </Stack>
            </div>
    <br/>
            <div style={{textAlign: "center"}}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                >
                    <ThemeProvider theme={theme}>
                        <Button color={"primary"} variant="outlined" startIcon={<Create />}>
                            Create Yours
                        </Button>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Share Quiz
                        </Button>
                    </ThemeProvider>
                    <br/>
            </Stack>



            </div>

        </div>
    )
}
