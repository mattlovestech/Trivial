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
    ChangeCircle,
    ChangeCircleOutlined, Circle,
    CircleNotificationsRounded,
    Edit,
    EditAttributesRounded
} from "@mui/icons-material";
import styles from "../styles/Home.module.css";
const data = [
"https://media4.giphy.com/media/gIODGWDBuG5AWlUExJ/giphy.gif?cid=ecf05e47yaanaf96jfkn3u36mzdwqlj48am2ouy6jx1f0z8n&rid=giphy.gif&ct=g"]
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
        <Input style={{width: "100%"}} placeholder={"Add Option " + (1 + index)} />

        {/*<Input defaultValue={"Option " + index} style={{width: "100%"}} placeholder={"Option 1"} />*/}
    </Button>)


)
const answerBox = (
    <div style={{marginLeft: "10%", marginRight: "10%"}}>
        <Box style={{color: "white", padding: "5px",textAlign: "center",
            background: "rgba(171, 71, 188, 1)",
            borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>
            <h3>
                What year were we founded...
            </h3>
        </Box>
        <Box style={{textAlign: "center",
            // backgroundImage:`url(` + data[0] +`)`,
            background: "rgba(171, 71, 188, .1)",
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
                <Button color={"secondary"} variant={"outlined"} size={"sm"}>
                     color
                    <Avatar sx={{ color: "#AB47BC", background: "transparent" }}>
                        <Circle />
                    </Avatar>
                </Button>
                <Button color={"secondary"} variant={"contained"} size={"sm"}>
                    background
                    <Avatar sx={{ color: "white", background: "transparent"}}>
                        <Edit />
                    </Avatar>
                </Button>

            </Stack>
            <br/>
            <div style={{backgroundImage:`url(` + data[0] +`)`,
                height: "450px"
            }}>
                <br/>
                <br/>
        {answerBox}
        <br/>
        <br/>
            </div>
        </>
    )





const steps = [
    {
        label: 'Info: Choose your question and set your answers',
        description: 'See an example...Choose a question with up to 20 characters and up to 4 answers.',
        component: answerBox
    ,
    },
    {
        label: 'Style: Select background and colors',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
        component: designBox
    },
    {
        label: 'Design: Name your quiz and launch it',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
        component: <Input/>
    },
];

export default function GetStartedFlow() {
    const data = [
        // "https://media2.giphy.com/media/gIODGWDBuG5AWlUExJ/giphy.gif?cid=ecf05e47uayt4e6a8bgezz8t0gb5xhooph79qe7j8f8pfx5n&rid=giphy.gif&ct=g"
   "https://media1.giphy.com/media/7zrin3TafdW1ph1TLL/giphy.gif?cid=ecf05e47qk0kgcqmh9oaw5q8h96xnwznndqobg3jzkkvahjp&rid=giphy.gif&ct=s"
    ]
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
                            {/*<div style={{marginLeft: "10%", marginRight: "10%"}}>*/}
                            {/*    <Box style={{color: "white", padding: "5px",textAlign: "center",*/}
                            {/*        background: "rgba(171, 71, 188, 1)",*/}
                            {/*        borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>*/}
                            {/*        <h3>*/}
                            {/*            What year were we founded...*/}
                            {/*        </h3>*/}
                            {/*    </Box>*/}


                            {/*    <br/>*/}
                            {/*    <br/>*/}
                            {/*</div>*/}

                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        color={"secondary"}
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Save & Continue'}
                                    </Button>
                                    <Button
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
                    <Typography>All steps completed - quiz is ready</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
