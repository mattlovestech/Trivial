import Head from 'next/head'

import styles from '../../styles/Home.module.css'
import AnswerBox from "../../components/answerBox";
import ProgressTopBar from "../../components/progress";
import LinearWithValueLabel from "../../components/progress";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import QuizNavBar from "../../components/quizNavBar";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AnswersBox, {
    blankQuizButton,
    correctQuizButton,
    incorrectQuizButton,
    incorrectQuizButtonClicked
} from "../../components/answersBox";
import Box from "@mui/material/Box";
import {
    ArrowBack,
    ArrowBackIos,
    ArrowForward,
    ArrowForwardIos,
    ArrowForwardIosOutlined, ArrowForwardIosRounded, ArrowForwardIosTwoTone,
    ArrowRight,
    Create
} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";



export default function Quiz({resultsArray}) {
    const standardArray = {

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
            "correctAnswer": 3,
            "question": "What state is Apple Corp. headquartered in?",
            "questionColor": "#000392",
            "user": {
                "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
                "name": "quizID",
                "uid": "24905u4839",
            }

        },
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
            "backgroundURL": "https://media0.giphy.com/media/alsvKsM7XdOSQuAQnw/giphy-downsized-large.gif",
            "correctAnswer": 1,
            "question": "What is the capitol of Georgia?",
            "questionColor": "red",
            "user": {
                "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
                "name": "quizID",
                "uid": "24905u4839",
            }

        },
        "deal7770": {
            "answers": {
                "0": {
                    "answer": "Los Angeles",
                    "correct": true
                },
                "1": {
                    "answer": "San Diego",
                    "correct": false
                },
                "2": {
                    "answer": "San Fransisco",
                    "correct": false
                },
                "3": {
                    "answer": "Atlanta",
                    "correct": false
                }
            },
            "backgroundURL": "https://media1.giphy.com/media/3oKIPkTY7ag66BLsB2/giphy.gif",
            "correctAnswer": 1,
            "question": "What city are the Lakers based in",
            "questionColor": "purple",
            "user": {
                "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
                "name": "quizID",
                "uid": "24905u4839",
            }

        }


    }
    let update = [incorrectQuizButton,correctQuizButton,incorrectQuizButton,incorrectQuizButton]
    let quizButton = [blankQuizButton,blankQuizButton,blankQuizButton,blankQuizButton]
    let buttonStyle = incorrectQuizButton
    // const data = [
    //     'http://tile.loc.gov/image-services/iiif/service:pnp:highsm:47500:47503/full/pct:25/0/default.jpg',
    //     "https://media4.giphy.com/media/QIjTUK2dJUUTFCGbCN/giphy.gif?cid=ecf05e47puiw7fxmku2hm4x6qjmsvtjlnxuv3tadmccdi7zn&rid=giphy.gif&ct=s"
    //
    // ]
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
    const [buttonClickedNumber, setButtonClickedNumber] = React.useState(0);
    let answers;
    let ResultsArray = resultsArray || standardArray
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
        }, 100);
        console.log(progress)
        return () => {
            clearInterval(timer);
        };
    }, []);
    function progressSet(buttonNumber) {
        setButtonClickedNumber(buttonNumber)
        setProgress(100)


    }

    function goForward() {
        if (questionNumber >= 0 && questionNumber < (Object.keys(ResultsArray).length) - 1) {
            setQuestionNumber(questionNumber + 1)
            setProgress(-2)

        } else {
            alert("no more questions in this quiz :(")
        }

    }
    function goBack() {
        if (progress < 7 && progress > -2 && questionNumber >= 1) {
            setQuestionNumber(questionNumber - 1)

        } else {
                setProgress(-2)
        }
    }
    function handleStyle(indexRaw,correctBool) {

if (correctBool) {
    // if correct bool === true then show the correct button styling

    return correctQuizButton
} else if (indexRaw === buttonClickedNumber[0]) {
    //if the bool is false and the button clicked is the button number

    return incorrectQuizButtonClicked
} else {
    // all else
    return incorrectQuizButton
}
    }

    if (progress === 100) {
        answers = Array(~~(4)).fill(4).map( (key,index) =>

            (<Button key={index} style={handleStyle(index,ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["correct"])}
                     variant={"contained"}>
                <Avatar sx={{ background: handleStyle(index,ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["correct"])["background"],
                    color: handleStyle(index,ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["correct"])["color"],
                    border: handleStyle(index,ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["correct"])["border"],
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

            (<Button key={index} onClick={() => progressSet([index])}   style={blankQuizButton}
                     variant={"contained"}>
                <Avatar sx={{ background: quizButton[index]["background"], color: quizButton[index]["color"], border:quizButton[index]["border"], width: 24, height: 24, marginRight: "15px"}} alt={String.fromCharCode(65 + index)} src="/static/images/avatar/1.jpg" />
                {/*{answers[index]}*/}
                {ResultsArray[Object.keys(ResultsArray)[questionNumber]]["answers"][index]["answer"]}
            </Button>)


        )
    }

    return (

        <div className={styles.container}
             // onClick={() => alert("A")}
             style={{backgroundImage:`url(` + ResultsArray[Object.keys(ResultsArray)[questionNumber]]["backgroundURL"] +`)`,
                 height: "100vh"

        }}>

            <br/>
            <LinearWithValueLabel progress={progress}/>
            <br/>
            <QuizNavBar
                profileImageURL={ResultsArray[Object.keys(ResultsArray)[questionNumber]]["user"]["profileImageURL"]}
                quizName={ResultsArray[Object.keys(ResultsArray)[questionNumber]]["user"]["name"]}/>
            <br/>
            <br/>

            <div style={{marginLeft: "0%", marginRight: "0%"}}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>
                <ArrowBackIos  onClick={() => goBack()} style={{color: "white", fontSize: "25px"}}/>
                <div>
                    <Box style={{color: "white", padding: "5px 15px 5px 15px",textAlign: "center",
                        background: ResultsArray[Object.keys(ResultsArray)[questionNumber]]["questionColor"],
                        borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>
                        <h3>{ResultsArray[Object.keys(ResultsArray)[questionNumber]]["question"]}</h3>
                    </Box>
                    <Box style={{textAlign: "center",
                        background: "rgba(255, 255, 255, 0.3)",
                        borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px"}}>
                        <br/>{answers}<br/><br/>
                    </Box>
                </div>

                    <ArrowForwardIosTwoTone onClick={() => goForward()} style={{color: "white", fontSize: "25px"}}/>
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
                            Create
                        </Button>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Share
                        </Button>
                    </ThemeProvider>



            </Stack>

    <br/>
                <Typography color={"secondary"}> Powered by InTrivial</Typography>
            </div>

        </div>
    )
}
