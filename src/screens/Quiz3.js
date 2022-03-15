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
import haak3teng1 from '../assets/audio/audio-lesson3/haak3teng1.wav';
import jiu3gei3bin1jat1fung1seon3 from '../assets/audio/audio-lesson3/jiu3gei3bin1jat1fung1seon3.wav'
import fan1fan3 from '../assets/audio/audio-lesson3/fan1fan3.wav';

import {Howl, Howler} from "howler";

import GoToButton from '../components/GoToButton';

import End3 from '../assets/end3.png';

function Quiz3(props) {

    const [q, setQ] = useState(0);

    const [stateAnswered, setStateAnswered] = useState([
        [false, false, false],
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
            questionText: "1. Which tone has a mid level pitch?",
            type: 1,
            answerOptions: [
                {isCorrect: false, number: 1, color: "#308fd7", answered: false},
                {isCorrect: true, number: 3, color: "#a9d18e", answered: false},
                {isCorrect: false, number: 6, color: "#313538", answered: false},
            ],
            correctAnsersCount: 1,
        },
        {
            questionText: "2. Which character is Tone 3?",
            type: 2,
            separate: false,
            answerOptions: [
                {isCorrect: true, pinyin: "haak", chinese: "客", answered: false},
                {isCorrect: false, pinyin: "teng", chinese: "廳", answered: false},
            ],
            sentence: "\"living room\"",
            correctAnsersCount: 1,
            sound: haak3teng1
        },
        {
            questionText: "3. Which three characters are Tone3?",
            type: 2,
            separate: false,
            answerOptions: [
                {isCorrect: true, pinyin: "jiu", chinese: "要", answered: false},
                {isCorrect: true, pinyin: "gei", chinese: "寄", answered: false},
                {isCorrect: false, pinyin: "bin", chinese: "邊", answered: false},
                {isCorrect: false, pinyin: "jat", chinese: "一", answered: false},
                {isCorrect: false, pinyin: "fung", chinese: "封", answered: false},
                {isCorrect: true, pinyin: "seon", chinese: "信", answered: false},
            ],
            sentence: "\"Which letter should I send?\"",
            correctAnsersCount: 3,
            sound: jiu3gei3bin1jat1fung1seon3
        },
        {
            questionText: "4. Which character is Tone3?",
            type: 2,
            separate: true,
            answerOptions: [
                {isCorrect: false, pinyin: "fan", chinese: "分", english:"score", answered: false},
                {isCorrect: true, pinyin: "fan", chinese: "瞓", english:"sleep", answered: false},
                
            ],
            sentence: "",
            correctAnsersCount: 1,
            sound: fan1fan3
        }
    ]

    

    function nextQuestion() {
        if(correctAnswered[q] === questions[q].correctAnsersCount) {
            if(q === 3) {
                setAnsweredAll(true);
                let arr_copy = [...props.progress]
                arr_copy[3] = 1;
                props.setProgress(arr_copy);
                localStorage.setItem('progress4', '1');
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
            <div className="quiz-menu-top-bar-left" onClick={() => {navigate("/lesson3");}}>
                <IoChevronBack className="quiz-menu-top-bar-icon"size="50"/>
            </div>
            <h1 className="quiz-menu-top-bar-text">Quiz II</h1>
            <div className="quiz-menu-top-bar-right">
            </div>
        </div>
        <div className="quiz-menu">
                {answeredAll ? (
                <div className="quiz-menu-answered-all">
                    <h2>Congratulations!</h2>
                    <h2>You have passed Lesson III.</h2>
                    <h2>Now you keep the Tone 3 Dragonfly.</h2>
                    <img src={End3} alt="end"/>
                    <GoToButton text="Continue" onClick={() => {navigate("/lesson4");}}/>
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



export default Quiz3;
