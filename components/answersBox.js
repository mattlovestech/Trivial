import React, { useState } from 'react';
import {Button} from "@mui/material";
import Avatar from "@mui/material/Avatar";
export const blankQuizButton = {
    marginBottom: "15px",
    width: "75%",
    justifyContent:" flex-start",
    borderRadius:"25px",
    background: "white",
    border: "1px black solid",
    color: "black"
}
export const correctQuizButton = {
    marginBottom: "15px",
    width: "75%",
    justifyContent:" flex-start",
    borderRadius:"25px",
    background: "darkgreen",

}
export const incorrectQuizButton = {
    marginBottom: "15px",
    width: "75%",
    justifyContent:" flex-start",
    borderRadius:"25px",
    background: "white",
    border: "1px darkred solid",
    color: "darkred"
}
export default function AnswersBox(props) {
    // Declare a new state variable, which we'll call "count"
   const [count, setCount] = useState(0);

    let update = [incorrectQuizButton,correctQuizButton,incorrectQuizButton,incorrectQuizButton]
    let quizButton = [blankQuizButton,blankQuizButton,blankQuizButton,blankQuizButton]
    let answers = ["Nashville", "Atlanta", "Georgia City", "Savannah" ]
    let progress;
    let finish = "blank"
    function progressSet() {
       setCount(1)
        progress = 100
        console.log(finish)
    }
    if (progress === 100 || count === 1) {
                answers = Array(~~(4)).fill(4).map( (key,index) =>

                    (<Button key={index}  style={update[index]}
                             variant={"contained"}>
                        <Avatar sx={{ background: update[index]["background"],
                            color: update[index]["color"],
                            border:update[index]["border"],
                            width: 24,
                            height: 24,
                            marginRight: "15px"}}
                            alt={String.fromCharCode(65 + index)}
                            src="/static/images/avatar/1.jpg" />
                        {answers[index]}

                    </Button>)
                )
    } else {
        answers = Array(~~(4)).fill(4).map( (key,index) =>

                    (<Button key={index} onClick={progressSet}   style={quizButton[index]}
                             variant={"contained"}>
                        <Avatar sx={{ background: quizButton[index]["background"], color: quizButton[index]["color"], border:quizButton[index]["border"], width: 24, height: 24, marginRight: "15px"}} alt={String.fromCharCode(65 + index)} src="/static/images/avatar/1.jpg" />
                        {answers[index]}
                    </Button>)


                )
    }
    // switch (progress) {
    //     case 100:
    //         answers = Array(~~(4)).fill(4).map( (key,index) =>
    //
    //             (<Button key={index}  style={update[index]}
    //                      variant={"contained"}>
    //                 <Avatar sx={{ background: update[index]["background"],
    //                     color: update[index]["color"],
    //                     border:update[index]["border"],
    //                     width: 24,
    //                     height: 24,
    //                     marginRight: "15px"}}
    //                     alt={String.fromCharCode(65 + index)}
    //                     src="/static/images/avatar/1.jpg" />
    //                 {answers[index]}
    //                 aa
    //             </Button>)
    //
    //
    //         )
    //         break;
    //     default:
    //         answers = Array(~~(4)).fill(4).map( (key,index) =>
    //
    //             (<Button key={index} onClick={progressSet}   style={quizButton[index]}
    //                      variant={"contained"}>
    //                 <Avatar sx={{ background: quizButton[index]["background"], color: quizButton[index]["color"], border:quizButton[index]["border"], width: 24, height: 24, marginRight: "15px"}} alt={String.fromCharCode(65 + index)} src="/static/images/avatar/1.jpg" />
    //                 {answers[index]}
    //             </Button>)
    //
    //
    //         )
    //
    // }
    return (
      <>

            {answers}
          {/*{progress}*/}
</>
    )
}