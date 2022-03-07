import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnswersBox, {blankQuizButton} from "./answersBox";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import {Stack} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
    Add, AddLink,
    AddLinkRounded,
    ChangeCircle,
    ChangeCircleOutlined, Circle,
    CircleNotificationsRounded, Code, CopyAll, CopyAllOutlined, Create,
    Edit,
    EditAttributesRounded, FindInPage, FindInPageRounded, NewReleasesRounded, PlusOne, Save
} from "@mui/icons-material";
import styles from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import QuizNavBar from "./quizNavBar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";


// let array = {
//
//     "deal777": {
//         "answers": {
//             "0": {
//                 "answer": "5",
//                 "correct": false
//             },
//             "1": {
//                 "answer": "10",
//                 "correct": false
//             },
//             "2": {
//                 "answer": "Optional",
//                 "correct": true
//             },
//             "3": {
//                 "answer": "Optional",
//                 "correct": false
//             }
//         },
//         "backgroundURL": "https://i.pinimg.com/originals/79/98/76/79987683faf27c0c4ddb2e57f2bfddac.gif",
//         "correctAnswer": 3,
//         "question": "What state is Apple Corp. headquartered in?",
//         "questionColor": "#000392",
//         "user": {
//             "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
//             "name": "quizID",
//             "uid": "24905u4839",
//         }
//
//     }
// }
const data = [
"https://media4.giphy.com/media/gIODGWDBuG5AWlUExJ/giphy.gif?cid=ecf05e47yaanaf96jfkn3u36mzdwqlj48am2ouy6jx1f0z8n&rid=giphy.gif&ct=g"]

export default function GetStartedFlow() {
    const [array, setArray] = React.useState({

        "deal777": {
            "answers": {
                "0": {
                    "answer": "Glass888",
                    "correct": false
                },
                "1": {
                    "answer": "Space Zoo",
                    "correct": false
                },
                "2": {
                    "answer": "Optional",
                    "correct": true
                },
                "3": {
                    "answer": "Optional",
                    "correct": false
                }
            },
            "backgroundURL": "https://i.pinimg.com/originals/79/98/76/79987683faf27c0c4ddb2e57f2bfddac.gif",
            "correctAnswer": 3,
            "question": "What is the name of our NFT collection?",
            "questionColor": "rgba(171, 71, 188, 1)",
            "user": {
                "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
                "name": "quizID",
                "uid": "24905u4839",
            }

        }
    });

    const answersList = Array(~~(4)).fill(4).map( (key,index) =>

        (<Button key={index} style={blankQuizButton}
                 variant={"contained"}>
            <Avatar sx={{ background: blankQuizButton["background"],
                color: blankQuizButton["color"],
                border:blankQuizButton["border"],
                width: 24,
                height: 24,
                marginRight: "15px"}}
                    alt={String.fromCharCode(65 + index)}
                    src="/static/images/avatar/1.jpg" />
            <Input style={{width: "100%"}} placeholder={array[Object.keys(array)[0]]["answers"][index]["answer"]} />

            {/*<Input defaultValue={"Option " + index} style={{width: "100%"}} placeholder={"Option 1"} />*/}
        </Button>)


    )
    const answerBox = (
        <div style={{marginLeft: "10%", marginRight: "10%"}}>
            <Box style={{color: "white", textAlign: "center",
                background: array[Object.keys(array)[0]]["questionColor"],
                padding: "5px 15px 5px 15px",
                borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>
                <h3>
                    <Input

                        multiline

                      //  value={array[Object.keys(array)[0]]["question"]}
                        placeholder={array[Object.keys(array)[0]]["question"]}
                        variant="standard"
                        style={{color: "white",
                            textAlign: "left !Important",
                            width: "80%",
                            fontSize: "18px",
                            fontWeight: "bold"

                           }}

                    />
                    </h3>
            </Box>
            <Box style={{textAlign: "center",
                // backgroundImage:`url(` + data[0] +`)`,
                background: "rgba(255, 255, 255, .25)",
                // border: "1px solid  rgba(171, 71, 188, 1)",
                borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px"}}>
                <br/>

                { answersList }

                <br/> <br/>
            </Box>

            <br/>
            <br/>
        </div>
    )

    const designBox =

        (
            <>

                <Stack  style={{background: "rgba(0,0,0,0.01)", color: "#AB47BC", borderRadius: "25px", paddingRight: "10px"}} direction="row"
                        justifyContent='center'
                        alignItems="left" spacing={2}>
                    {/*<Select type={"select"} color={"secondary"} variant={"outlined"} size={"sm"}>*/}
                    {/*    color*/}
                    {/*    <Avatar sx={{ color: "#AB47BC", background: "transparent" }}>*/}
                    {/*        <Circle />*/}
                    {/*    </Avatar>*/}
                    {/*</Select>*/}

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" style={{backgroundColor: "white"}}>Color&nbsp;</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Age"
                         //   onChange={}
                        >
                            <MenuItem value={10}>
                                <img style={{height:"8vh",width: "100%",  objectFit: "cover", backgroundColor: array[Object.keys(array)[0]]["questionColor"]}}/>
                     </MenuItem>
                            <MenuItem style={{textAlign: "center"}} value={30}>
                                <img style={{height:"8vh",width: "100%",  objectFit: "cover", backgroundColor: "grey"}}/>
                            </MenuItem>

                            <MenuItem style={{textAlign: "center"}} value={30}>
                                <img style={{height:"8vh",width: "100%",  objectFit: "cover", backgroundColor: "black"}}/>
                            </MenuItem>
                            <MenuItem style={{textAlign: "center"}} value={40}>
                            <img style={{height:"8vh",width: "100%",  objectFit: "cover", backgroundColor: "red"}}/>
                        </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" style={{backgroundColor: "white"}}>Background&nbsp;</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Age"
                            //   onChange={}
                        >
                            <MenuItem style={{textAlign: "center"}} value={10}>
                                <img style={{height:"8vh",width: "100%",  objectFit: "cover"}}
                                     src={"https://media4.giphy.com/media/gIODGWDBuG5AWlUExJ/giphy.gif?cid=ecf05e47yaanaf96jfkn3u36mzdwqlj48am2ouy6jx1f0z8n&rid=giphy.gif&ct=g"}/>
                            </MenuItem>
                            <MenuItem style={{textAlign: "center"}} value={20}>
                                <img style={{height:"8vh",width: "100%",  objectFit: "cover"}}
                                     src={"https://cdn.vox-cdn.com/thumbor/0mqD9EvEmDetvwWyxp18WLvIk7o=/0x0:420x314/1400x788/filters:focal(136x115:202x181):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/55279403/tenor.0.gif"}/>
                            </MenuItem>
                            <MenuItem style={{textAlign: "center"}} value={30}>
                                <img style={{height:"8vh",width: "100%",  objectFit: "cover"}}
                                     src={"https://media0.giphy.com/media/l0HlGs7u3G9dkQ8DK/giphy.gif"}/>
                            </MenuItem>
                            <MenuItem style={{textAlign: "center"}} value={40}>
                                <img style={{height:"8vh",width: "100%",  objectFit: "cover"}}
                                     src={"https://buffer.com/library/content/images/library/wp-content/uploads/2016/06/giphy.gif"}/>
                            </MenuItem>
                             <>Find More <FindInPage/></>
                        </Select>

                    </FormControl>
                    {/*<Button color={"secondary"} variant={"contained"} size={"sm"}>*/}
                    {/*    background*/}
                    {/*    <Avatar sx={{ color: "white", background: "transparent"}}>*/}
                    {/*        <Edit />*/}
                    {/*    </Avatar>*/}
                    {/*</Button>*/}

                </Stack>
                <br/>
                <div style={{backgroundImage:`url(` + data[0] +`)`,
                    height: "500px"
                }}>
                    <br/>
                    <br/>
                    {answerBox}
                    <br/>
                    <br/>
                </div>
            </>
        )

        const publishBox = (
            <>

                <a >
                    <TextField
                        label={"Shareable Link"}
                    value={"http://intrivial.com/490843949"}
                    disabled={true}
                    fullWidth
                    />




                </a>

            </>
        )





    const steps = [
        {
            label: 'Setup: Choose your question and set  answers',
            description: 'See an example...Choose a question with up to 20 characters and up to 4 answers.',
            component: answerBox
            ,
        },
        {
            label: 'Design: Select background and color',
            description:
                'An ad group contains one or more ads which target a shared set of keywords.',
            component: designBox
        },
        {
            label: 'Publish: Name your question and launch it',
            description: `Publish to get a shareable link to your question but, first you need to name it.`,
            component: publishBox
        },
    ];

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: "100%" }}>
            <Stepper activeStep={activeStep} orientation="vertical"   color={"secondary"}>
                {steps.map((step, index) => (
                    <Step style={{borderRadius: "25px", background: "rgba(255,255,255,0.1)"}} key={step.label}>
                        <StepLabel
                            optional={index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null}>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography> {step.description}</Typography>
                            <br/>
                            {step.component}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <br/>
                                    <Button
                                        color={"secondary"}
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? (<>Publish &nbsp;<AddLinkRounded/>&nbsp;</>): (<>Save & Continue</>)}
                                    </Button>
                                    <Button
                                        color={"secondary"}
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>

                                </div>

                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - question is ready</Typography>
                    <br/>
                    {publishBox}

                    <br/>
                    <br/>
                    <Button color={"secondary"} variant={"contained"}>View in  Dashboard </Button>
                    <Button color={"secondary"} onClick={handleReset}> Create New </Button>

                </Paper>
            )}
        </Box>
    );
}
