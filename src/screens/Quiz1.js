import './Quiz1.css';
import {Main} from './Main';
import { React, useState } from 'react';
import Switch from "react-switch";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import QuizToneButton from '../components/QuizToneButton'
import QuizCharacterButton from '../components/QuizCharacterButton'
import ChangeQuestionButton from '../components/ChangeQuestionButton'
import { IoChevronBack } from 'react-icons/io5';
import {FaMicrophone, FaPlay} from 'react-icons/fa';
import { ImVolumeHigh } from 'react-icons/im'
import MainMenuTopBar from '../assets/main-menu-top-bar.png';
import { Route, Link, Router, useNavigate} from 'react-router-dom';
import QuizToneButtonAnswered from '../components/QuizToneButtonAnswered';
import QuizCharacterButtonAnswered from '../components/QuizCharacterButtonAnswered';
import Luk6jam1 from '../assets/audio/audio-lesson1/luk6jam1.wav';
import Sik1dak1duk6nei1di1zi6 from '../assets/audio/audio-lesson1/sik1dak1duk6nei1di1zi6.wav';
import Ze6ze1 from '../assets/audio/audio-lesson1/ze6ze1.wav';

import {Howl, Howler} from "howler";

import GoToButton from '../components/GoToButton';

import End1 from '../assets/end1.png';

function Quiz1(props) {

    const [q, setQ] = useState(0);

    const [stateAnswered, setStateAnswered] = useState([
        [false, false],
        [false, false],
        [false, false],
        [false, false, false, false, false, false],
        [false, false]
    ]);


    const SoundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }

    // const delayedSound = setTimeout(SoundPlay, 2000);
    Howler.volume(1.0);

    const [correctAnswered, setCorrectAnswered] = useState([0, 0, 0, 0, 0]);

    const [answeredAll, setAnsweredAll] = useState(false);

    const questions = [
        {
            questionText: "1. Which tone has a high pitch?",
            type: 1,
            answerOptions: [
                {isCorrect: true, number: 1, color: "#308fd7", answered: false},
                {isCorrect: false, number: 6, color: "#313538", answered: false},
            ],
            correctAnsersCount: 1,
        },
        {
            questionText: "2. Which tone has a low pitch?",
            type: 1,
            answerOptions: [
                {isCorrect: false, number: 1, color: "#308fd7", answered: false},
                {isCorrect: true, number: 6, color: "#313538", answered: false},
            ],
            correctAnsersCount: 1,
        },
        {
            questionText: "3. Which character is Tone 1?",
            type: 2,
            separate: false,
            answerOptions: [
                {isCorrect: false, pinyin: "luk", chinese: "錄", answered: false},
                {isCorrect: true, pinyin: "jam", chinese: "音", answered: false},
            ],
            sentence: "\"sound recording\"",
            correctAnsersCount: 1,
            sound: Luk6jam1
        },
        {
            questionText: "4. Which two characters are Tone 6?",
            type: 2,
            separate: false,
            answerOptions: [
                {isCorrect: false, pinyin: "sik", chinese: "識", answered: false},
                {isCorrect: false, pinyin: "dak", chinese: "得", answered: false},
                {isCorrect: true, pinyin: "duk", chinese: "讀", answered: false},
                {isCorrect: false, pinyin: "nei", chinese: "呢", answered: false},
                {isCorrect: false, pinyin: "di", chinese: "啲", answered: false},
                {isCorrect: true, pinyin: "zi", chinese: "字", answered: false},
            ],
            sentence: "\"I can pronounce these characters.\"",
            correctAnsersCount: 2,
            sound: Sik1dak1duk6nei1di1zi6
        },
        {
            questionText: "5. Which character is Tone 1?",
            type: 2,
            separate: true,
            answerOptions: [
                {isCorrect: false, pinyin: "ze", chinese: "謝", english:"wither", answered: false},
                {isCorrect: true, pinyin: "ze", chinese: "遮", english:"umbrella", answered: false},
                
            ],
            sentence: "\"I can pronounce these characters.\"",
            correctAnsersCount: 1,
            sound: Ze6ze1
        }
    ]

    

    function nextQuestion() {
        if(correctAnswered[q] === questions[q].correctAnsersCount) {
            if(q === 4) {
                setAnsweredAll(true);
                let arr_copy = [...props.progress]
                arr_copy[1] = 1;
                props.setProgress(arr_copy);
                localStorage.setItem('progress2', '1');
            }
            else {
                const tmp = q + 1;
                setQ(tmp);
                if(q > 0) {
                    SoundPlay(questions[q + 1].sound);
                }
            }
        }
    }

    function previousQuestion() {
        if(q > 0) {
            const tmp = q - 1;
            setQ(tmp);
            if(q > 0) {
                SoundPlay(questions[q - 1].sound);
            }
        }
    }

    function clickToneButton(q, index) {
        if(correctAnswered[q] < questions[q].correctAnsersCount) {
            let stateAnswered_copy = [...stateAnswered]
            stateAnswered_copy[q][index]= true;
            setStateAnswered(stateAnswered_copy);
            if(questions[q].answerOptions[index].isCorrect === true) {
                let correctAnswered_copy = [...correctAnswered]
                correctAnswered_copy[q]++;
                setCorrectAnswered(correctAnswered_copy);
            }
        }
    }

    let navigate = useNavigate();
    return (<div className='Quiz'>
        <div className="quiz-menu-top-bar">
            <div className="quiz-menu-top-bar-left" onClick={() => {navigate("/lesson1");}}>
                <IoChevronBack className="quiz-menu-top-bar-icon"size="50"/>
            </div>
            <h1 className="quiz-menu-top-bar-text">Quiz I</h1>
            <div className="quiz-menu-top-bar-right">
            </div>
        </div>
        <div className="quiz-menu">
                {answeredAll ? (
                <div className="quiz-menu-answered-all">
                    <h2>Congratulations!</h2>
                    <h2>You have passed Lesson I.</h2>
                    <h2>Now you keep the Tone 1 Bird and the Ton 6 Cat.</h2>
                    <img src={End1} alt="end"/>
                    <GoToButton text="Continue" onClick={() => {navigate("/lesson2");}}/>
                </div>
                ) : (
                    <div className="quiz-menu-body">
                        <div className="quiz-menu-question-body">
                            <div className="quiz-menu-question">
                                <h2> {questions[q].questionText}</h2>
                            </div>
                            {questions[q].type === 1 ? (
                                <div className="quiz-menu-answer">
                                    {questions[q].answerOptions.map((answerOption, index) => (
                                        !stateAnswered[q][index] ? <QuizToneButton className="quiz-menu-answer-button" color={answerOption.color} isCorrect={answerOption.isCorrect} number={answerOption.number} answered={false} onClick={() => {clickToneButton(q, index)}}/>
                                        : <QuizToneButtonAnswered className="quiz-menu-answer-button" color={answerOption.color} isCorrect={answerOption.isCorrect} number={answerOption.number} answered={true} onClick={() => {clickToneButton(q, index)}}/>
                                    ))}
                                </div>
                            ) : (
                                <div className="quiz-menu-answer">
                                    {questions[q].answerOptions.map((answerOption, index) => (
                                        !stateAnswered[q][index] ? <QuizCharacterButton className="quiz-menu-answer-button" isCorrect={answerOption.isCorrect} pinyin={answerOption.pinyin} chinese={answerOption.chinese} english={answerOption.english} answered={stateAnswered[q][index]} separate={questions[q].separate} onClick={() => {clickToneButton(q, index)}}/>
                                        : <QuizCharacterButtonAnswered className="quiz-menu-answer-button" isCorrect={answerOption.isCorrect} pinyin={answerOption.pinyin} chinese={answerOption.chinese} english={answerOption.english} answered={stateAnswered[q][index]} separate={questions[q].separate} onClick={() => {clickToneButton(q, index)}}/>
                                    ))}
                                </div>
                            )}
                            {questions[q].separate ? (
                                <div>
                                    <h2> </h2>
                                </div>
                            ) : (
                                <div className="question-section">
                                    <h2>{questions[q].sentence}</h2>
                                </div>
                            )}
                            {questions[q].type === 1 ? (<></>) :
                            (
                                <ImVolumeHigh size="50px" margin="10px" onClick={() => SoundPlay(questions[q].sound)}/>
                            )}
                        </div>
                        <div className="quiz-menu-bottom-bar">
                                <ChangeQuestionButton className="quiz-menu-change-question-button" direction={true} onClick={previousQuestion}/>
                                <ChangeQuestionButton className="quiz-menu-change-question-button" direction={false} onClick={nextQuestion}/>
                        </div>
                    </div>
                )}
        </div>
    </div>);
}



export default Quiz1;