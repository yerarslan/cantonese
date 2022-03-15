import './Question.css';
import { React } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { Route, Link, useNavigate} from 'react-router-dom';
import HelpLesson from '../assets/help_lesson.jpg';
import HelpGame from '../assets/help_game.jpg';
import HelpVideo from '../assets/help_video.jpg';

function Question() {
  let navigate = useNavigate();
  return (
    <div className="Question">
        <div className="question-menu-top-bar">
            <div className="question-menu-top-bar-left" onClick={() => {navigate("/");}}>
                <IoChevronBack className="question-menu-top-bar-icon"size="50"/>
                <h2 className="question-menu-top-bar-icon-text">Home</h2>
            </div>
            <h1 className="question-menu-top-bar-text">Help</h1>
            <div className="question-menu-top-bar-right"></div>
        </div>
        <div className="question-menu-body">
            <h1 className="question-menu-header">Lesson</h1>
            <img src={HelpLesson} alt="Help lesson"/>
            <p className="question-menu-text">1. Replay teachers recording</p>
            <p className="question-menu-text">2. Record your pronunciation</p>
            <p className="question-menu-text">3. Compare your pronunciation with teacher's recording</p> 
            <p className="question-menu-text">Settings: you may customise the display setting</p>
            <h1 className="question-menu-header">Game</h1>
            <img src={HelpGame} alt="Help game"/> 
            <p className="question-menu-text">1. Draw the tone that your hear</p> 
            <p className="question-menu-text">2. Tap to listen again</p> 
            <p className="question-menu-text">3. Draw the tone of each word, one by one</p>
            <h1 className="question-menu-header">Video</h1>
            <img src={HelpVideo} alt="Help video"/>  
            <p className="question-menu-text">1. First, listen to the conversation</p> 
            <p className="question-menu-text">2. Tap on the sentence that you want to practise</p>
        </div>  
    </div>
  );
}

export default Question;