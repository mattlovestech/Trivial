import React, { useState } from 'react';
import {Button} from "@mui/material";

export default function AnswersBox(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    let answers;
    switch (props["progress"]) {
        case 100:
            answers = (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(props["progress"] + 1)}>
                        {
                            props["progress"]
                        }
                    </button>
                </div>
            )
            break;
        default:
            answers = (<div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(props["progress"] + 1)}>

                </button>
            </div>)
            break;
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(props["progress"] + 1)}>
                {
                    props["progress"]
                }
            </button>
            {answers}
        </div>
    )
}