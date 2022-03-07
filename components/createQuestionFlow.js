import React from "react";
import Quiz from "../pages/quiz/quiz";

export default class CreateQuestionFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  "deal777": {
                "answers": {
                    "0": {
                        "answer": "5",
                        "correct": false
                    },
                    "1": {
                        "answer": "10",
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
                "question": "What state is Apple Corp. headquartered in?",
                "questionColor": "#000392",
                "user": {
                    "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
                    "name": "quizID",
                    "uid": "24905u4839",
                }

            }
        };
    }
    componentDidMount() {

    }

    render() {
        return (<>

        </>);
    }
}