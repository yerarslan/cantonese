import {React, useState} from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import './ChangeQuestionButton.css';

function ChangeQuestionButton(props) {
        return props.direction ? (
            <div className="change-question-body" onClick={props.onClick}>
                <h4>Previous Question</h4>
                <BiLeftArrowAlt size={55}/>
            </div>
        ) : (
            <div className="change-question-body" onClick={props.onClick}>
                <h4>Next Question</h4>
                <BiRightArrowAlt size={55}/>
            </div>
        )
}

export default ChangeQuestionButton;