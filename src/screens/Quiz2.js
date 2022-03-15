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
import Din6Jing2 from '../assets/audio/audio-lesson2/din6jing2.wav';
import Paau2Bou6Ding6Caai2Daan1Ce1Hou2 from '../assets/audio/audio-lesson2/paau2bou6ding6caai2daan1ce1hou2.wav';
import Coeng1Coeng2 from '../assets/audio/audio-lesson2/coeng1coeng2.wav';

import {Howl, Howler} from "howler";

import GoToButton from '../components/GoToButton';

import End2 from '../assets/end2.png';

function Quiz2(props) {

    const [q, setQ] = useState(0);

    const [stateAnswered, setStateAnswered] = useState([
        [false, false, false],
        [false, false],
        [false, false, false, false, false, false, false],
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
            questionText: "1. Which tone has a rising pitch?",
            type: 1,
            answerOptions: [
                {isCorrect: false, number: 1, color: "#308fd7", answered: false},
                {isCorrect: true, number: 2, color: "#dc404f", answered: false},
                {isCorrect: false, number: 6, color: "#313538", answered: false},
            ],
            correctAnsersCount: 1,
        },
        {
            questionText: "2. Which character is Tone 2?",
            type: 2,
            separate: false,
            answerOptions: [
                {isCorrect: false, pinyin: "din", chinese: "電", answered: false},
                {isCorrect: true, pinyin: "jing", chinese: "影", answered: false},
            ],
            sentence: "\"movie\"",
            correctAnsersCount: 1,
            sound: Din6Jing2
        },
        {
            questionText: "3. Which three characters are Tone2?",
            type: 2,
            separate: false,
            answerOptions: [
                {isCorrect: true, pinyin: "paau", chinese: "跑", answered: false},
                {isCorrect: false, pinyin: "bou", chinese: "步", answered: false},
                {isCorrect: false, pinyin: "ding", chinese: "定", answered: false},
                {isCorrect: true, pinyin: "caai", chinese: "踩", answered: false},
                {isCorrect: false, pinyin: "daan", chinese: "單", answered: false},
                {isCorrect: false, pinyin: "ce", chinese: "車", answered: false},
                {isCorrect: true, pinyin: "hou", chinese: "好", answered: false},
            ],
            sentence: "\"Is it better go running or cycling?\"",
            correctAnsersCount: 3,
            sound: Paau2Bou6Ding6Caai2Daan1Ce1Hou2
        },
        {
            questionText: "4. Which character is Tone2?",
            type: 2,
            separate: true,
            answerOptions: [
                {isCorrect: false, pinyin: "coeng", chinese: "槍", english:"gun", answered: false},
                {isCorrect: true, pinyin: "coeng", chinese: "搶", english:"to run", answered: false},
                
            ],
            sentence: "",
            correctAnsersCount: 1,
            sound: Coeng1Coeng2
        }
    ]

    

    function nextQuestion() {
        if(correctAnswered[q] === questions[q].correctAnsersCount) {
            if(q === 3) {
                setAnsweredAll(true);
                let arr_copy = [...props.progress]
                arr_copy[2] = 1;
                props.setProgress(arr_copy);
                localStorage.setItem('progress3', '1');
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
            <div className="quiz-menu-top-bar-left" onClick={() => {navigate("/lesson2");}}>
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
                    <h2>You have passed Lesson II.</h2>
                    <h2>Your Tone 6 Cat knows how to catch the Tone 1 Bird now.</h2>
                    <img src={End2} alt="end"/>
                    <GoToButton text="Continue" onClick={() => {navigate("/lesson3");}}/>
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



export default Quiz2;
