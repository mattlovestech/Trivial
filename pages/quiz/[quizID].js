
import Quiz from "./quiz";
import * as React from "react";
import {useRouter} from "next/router";
import Head from "next/head";

function QuizPage() {
    const router = useRouter()
    const { quizID } = router.query
    let data = {

        "deal777": {
            "answers": {
                "0": {
                    "answer": "Ohio",
                    "correct": false
                },
                "1": {
                    "answer": "Michigan",
                    "correct": false
                },
                "2": {
                    "answer": "Texas",
                    "correct": true
                },
                "3": {
                    "answer": "Arizona",
                    "correct": false
                }
            },
            "backgroundURL": "http://i.imgur.com/JCVLyZ4.gif",
            "correctAnswer": "3",
            "question": "What state did I live in for the longest",
            "questionColor": "teal",
            "user": {
                "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
                "name": quizID,
                "uid": "24905u4839",
            }

        },
        "deal39": {
            "answers": {
                "0": {
                    "answer": "Lil Wayne",
                    "correct": false
                },
                "1": {
                    "answer": "Drake",
                    "correct": true
                },
                "2": {
                    "answer": "Chris Brown",
                    "correct": false
                },
                "3": {
                    "answer": "XXXTentacion",
                    "correct": false
                }
            },
            "backgroundURL": "https://i.pinimg.com/originals/e9/e7/6a/e9e76a50cd1ed63904b65adefb51e3c0.gif",
            "correctAnswer": "3",
            "question": "What artist did I meet in 2018 in California?",
            "questionColor": "orange",
            "user": {
                "profileImageURL": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28059302_10204493246327835_2867238887703167492_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6lhQV8S39gAX_jxyIq&_nc_ht=scontent-atl3-1.xx&oh=00_AT9SfIg4_h18Zi3wAKCzglXVOki2r84lYk9Ac1ZGN4P7VA&oe=6248C9CE",
                "name": quizID,
                "uid": "24905u4839",
            }

        }

    }

    return (
        <div>
            <Head>
                <title>{quizID}'s Trivial Quiz</title>
                <meta name="description" content={"Checkout this quiz that " + quizID + " created using Trivial"} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Quiz resultsArray={data}/>
        </div>

    )
}

export default QuizPage