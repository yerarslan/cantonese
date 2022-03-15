import {React, useState} from 'react';
import { ImCheckmark } from 'react-icons/im';
import { ImCross } from 'react-icons/im';

import './QuizToneButtonAnswered.css';

function QuizToneButtonAnswered(props) {

    const [answered, setAnswered] = useState(props.answered);
    const style = {
        backgroundColor: props.color,
        marginLeft: "50px",
        marginRight: "50px"
    }

    function click() {
        props.onClick();
        setAnswered(true);
    }

    return <div className="quiz-menu-answer-button">
        {true ? (
            <div  className="above-tone">
                {props.isCorrect ? (
                    <ImCheckmark size={35} color='green'/>
                ) : (
                    <ImCross size={35} color='red'/>
                )}
            </div>
        ) : (
            <div className="above-tone">
                
            </div>
        )}
        <button className="tone-button" style={style} onClick={click}>Tone {props.number}</button>
    </div>
}

export default QuizToneButtonAnswered;