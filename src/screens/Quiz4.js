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
import mun5ji3 from '../assets/audio/audio-lesson4/mun5ji3.wav';
import nei5heoi3man6haa5gaau3sau6 from '../assets/audio/audio-lesson4/nei5heoi3man6haa5gaau3sau6.wav';
import ngo5ngo6 from '../assets/audio/audio-lesson4/ngo5ngo6.wav';

import {Howl, Howler} from "howler";

import GoToButton from '../components/GoToButton';

import End5 from '../assets/end5.png';

function Quiz4(props) {

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
            questionText: "1. Which tone has a rising pitch?",
            type: 1,
            answerOptions: [
                {isCorrect: false, number: 3, color: "#a9d18e", answered: false},
                {isCorrect: true, number: 5, color: "#7030a0", answered: false},
                {isCorrect: false, number: 6, color: "#313538", answered: false},
            ],
            correctAnsersCount: 1,
        },
        {
            questionText: "2. Which character is Tone 5?",
            type: 2,
            separate: false,
            answerOptions: [
                {isCorrect: true, pinyin: "mun", chinese: "滿", answered: false},
                {isCorrect: false, pinyin: "ji", chinese: "意", answered: false},
            ],
            sentence: "\"satisfaction\"",
            correctAnsersCount: 1,
            sound: mun5ji3,
        },
        {
            questionText: "3. Which three characters are Tone2?",
            type: 2,
            separate: false,
            answerOptions: [
                {isCorrect: true, pinyin: "nei", chinese: "你", answered: false},
                {isCorrect: false, pinyin: "heoi", chinese: "去", answered: false},
                {isCorrect: false, pinyin: "man", chinese: "問", answered: false},
                {isCorrect: true, pinyin: "haa", chinese: "吓", answered: false},
                {isCorrect: false, pinyin: "gaau", chinese: "教", answered: false},
                {isCorrect: false, pinyin: "sau", chinese: "授", answered: false},
            ],
            sentence: "\"Maybe you just go to ask the professor?\"",
            correctAnsersCount: 2,
            sound: nei5heoi3man6haa5gaau3sau6
        },
        {
            questionText: "4. Which character is Tone2?",
            type: 2,
            separate: true,
            answerOptions: [
                {isCorrect: true, pinyin: "ngo", chinese: "我", english: "me", answered: false},
                {isCorrect: false, pinyin: "ngo", chinese: "餓", english:"hungry", answered: false},
                
            ],
            sentence: "",
            correctAnsersCount: 1,
            sound: ngo5ngo6
        }
    ]

    

    function nextQuestion() {
        if(correctAnswered[q] === questions[q].correctAnsersCount) {
            if(q === 3) {
                setAnsweredAll(true);
                let arr_copy = [...props.progress]
                arr_copy[4] = 1;
                props.setProgress(arr_copy);
                localStorage.setItem('progress5', '1');
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
            <div className="quiz-menu-top-bar-left" onClick={() => {navigate("/lesson4");}}>
                <IoChevronBack className="quiz-menu-top-bar-icon"size="50"/>
            </div>
            <h1 className="quiz-menu-top-bar-text">Quiz IV</h1>
            <div className="quiz-menu-top-bar-right">
            </div>
        </div>
        <div className="quiz-menu">
                {answeredAll ? (
                <div className="quiz-menu-answered-all">
                    <h2>Congratulations!</h2>
                    <h2>You have passed Lesson IV.</h2>
                    <h2>Your Tone 6 Cat knows how to catch the Tone 3 Dragonfly now.</h2>
                    <img src={End5} alt="end"/>
                    <GoToButton text="Continue" onClick={() => {navigate("/lesson5");}}/>
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



export default Quiz4;
