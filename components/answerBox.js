
import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";


const blankQuizButton = {
    marginBottom: "15px",
    width: "75%",
    justifyContent:" flex-start",
    borderRadius:"25px",
    background: "white",
    border: "1px black solid",
    color: "black"
}
const correctQuizButton = {
    marginBottom: "15px",
    width: "75%",
    justifyContent:" flex-start",
    borderRadius:"25px",
    background: "darkgreen",

}
const incorrectQuizButton = {
    marginBottom: "15px",
    width: "75%",
    justifyContent:" flex-start",
    borderRadius:"25px",
    background: "white",
    border: "1px darkred solid",
    color: "darkred"
}

export default class AnswerBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quizButton: [blankQuizButton,blankQuizButton,blankQuizButton,blankQuizButton],
                        answers: ["Nashville", "Atlanta", "Georgia City", "Savannah" ]
                        };
        this.handleClick = this.handleClick.bind(this);
    }
     handleClick(button,color) {
        this.setState({quizButton: [incorrectQuizButton,correctQuizButton,incorrectQuizButton,incorrectQuizButton]})
    }
    render() {

        const answers = Array(~~(4)).fill(4).map( (key,index) =>

            //  <div  key={index}>
            //     <br/>
            //          <a>Choose a <strong>school</strong> to see colors with hex codes</a>
            // </div>
            <Button onClick={this.handleClick} style={this.state.quizButton[index]}
                    variant={"contained"}>
                <Avatar sx={{ background: this.state.quizButton[index]["background"], color: this.state.quizButton[index]["color"], border: this.state.quizButton[index]["border"], width: 24, height: 24, marginRight: "15px"}} alt={String.fromCharCode(65 + index)} src="/static/images/avatar/1.jpg" />
                {this.state.answers[index]}
            </Button>
        )

        return (
            <>

                <div style={{marginLeft: "10%", marginRight: "10%"}}>
                    <Box style={{color: "white", padding: "5px",textAlign: "center",
                        background: "black",
                        borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>
                        <h3>What city is the capital of Georgia?</h3>
                    </Box>

                    <Box style={{textAlign: "center",
                        background: "rgba(255, 255, 255, 0.3)",
                        borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px"}}>
                        <br/>

                        {answers}
                        {/*<Button onClick={this.handleClick} style={this.state.quizButton[0]}*/}
                        {/*        variant={"contained"}>*/}
                        {/*    <Avatar sx={{ background: "white", color: this.state.quizButton[0]["color"], border: this.state.quizButton[0]["border"], width: 24, height: 24, marginRight: "15px"}} alt="A" src="/static/images/avatar/1.jpg" />*/}
                        {/*    <a>Savannah</a>*/}
                        {/*</Button>*/}
                        {/*<br/>*/}
                        {/*<Button onClick={this.handleClick} style={this.state.quizButton[1]}*/}
                        {/*        variant={"contained"}>*/}
                        {/*    <Avatar sx={{ background: "white", color: this.state.quizButton[1]["color"],border: this.state.quizButton[1]["border"],width: 24, height: 24, marginRight: "15px"}} alt="B" src="/static/images/avatar/1.jpg" />*/}
                        {/*    <a>Atlanta</a>*/}
                        {/*</Button>*/}
                        {/*<br/>*/}
                        {/*<Button onClick={this.handleClick} style={this.state.quizButton[2]}*/}
                        {/*        variant={"contained"}>*/}
                        {/*    <Avatar sx={{ background: "white", color: "black",border: "1px black solid",width: 24, height: 24, marginRight: "15px"}} alt="C" src="/static/images/avatar/1.jpg" />*/}
                        {/*    <a>Nashville</a>*/}
                        {/*</Button>*/}
                        {/*<br/>*/}
                        {/*<Button onClick={this.handleClick} style={this.state.quizButton[3]}*/}
                        {/*        variant={"contained"}>*/}
                        {/*    <Avatar sx={{ background: "white", color: "black",border: "1px black solid",width: 24, height: 24, marginRight: "15px"}} alt="D" src="/static/images/avatar/1.jpg" />*/}
                        {/*    <a>Miami</a>*/}
                        {/*</Button>*/}
                        <br/> <br/>
                    </Box>
                </div>


            </>
        )
    }
}

