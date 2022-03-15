import {React, useState} from 'react';
import { ImCheckmark } from 'react-icons/im';
import { ImCross } from 'react-icons/im';

import './QuizCharacterButton.css';

function QuizCharacterButton(props) {

    const [answered, setAnswered] = useState(props.answered);

    const style = {
        marginLeft: "50px",
        marginRight: "50px"
    }

    function click() {
        props.onClick();
        setAnswered(true);
    }
    return <div className="quiz-button-body">
        {false ? (
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
        <div className="character-button" onClick={click} style={style}>
            <h2>{props.pinyin}</h2>
            <h1>{props.chinese}</h1>
            {props.separate ? (
                <h2>{props.english}</h2>
            ) : (
                <div></div>
            )}
        </div>
    </div>
}

export default QuizCharacterButton;