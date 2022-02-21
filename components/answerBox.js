
import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";




export default class AnswerBox extends React.Component {
    render() {
        const blankQuizButton = "blankQuizButtonPlain"

        return (
            <>

                <div style={{marginLeft: "10%", marginRight: "10%"}}>
                    <Box style={{color: "white", padding: "5px",textAlign: "center",
                        background: "black",
                        borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>
                        <h3>What city is Howard University located in?</h3>
                    </Box>
                    <Box style={{textAlign: "center",
                        background: "rgba(255, 255, 255, 0.3)",
                        borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px"}}>
                        <br/>
                        <Button style={{
                            marginBottom: "15px",
                            width: "75%",
                            justifyContent:" flex-start",
                            borderRadius:"25px",
                            background: "white",
                            color: "black"
                        }}
                                variant={"contained"}>
                            <Avatar sx={{ background: "white", color: "black", border: "1px black solid", width: 24, height: 24, marginRight: "15px"}} alt="A" src="/static/images/avatar/1.jpg" />
                            <a>Atlanta</a>
                        </Button>
                        <br/>
                        <Button className={"blankQuizButtonPlain"} variant={"contained"}>
                            <Avatar sx={{ background: "white", color: "black",border: "1px black solid",width: 24, height: 24, marginRight: "15px"}} alt="B" src="/static/images/avatar/1.jpg" />
                            <a>Washington D.C.</a>
                        </Button>
                        <br/>
                        <Button className={"blankQuizButtonPlain"} variant={"contained"} >
                            <Avatar sx={{ background: "white", color: "black",border: "1px black solid",width: 24, height: 24, marginRight: "15px"}} alt="C" src="/static/images/avatar/1.jpg" />
                            <a>Houston</a>
                        </Button>
                        <br/>
                        <Button className={"blankQuizButtonPlain"} variant={"contained"} >
                            <Avatar sx={{ background: "white", color: "black",border: "1px black solid",width: 24, height: 24, marginRight: "15px"}} alt="D" src="/static/images/avatar/1.jpg" />
                            <a>Houston</a>
                        </Button>
                        <br/> <br/>
                    </Box>
                </div>


            </>
        )
    }
}

