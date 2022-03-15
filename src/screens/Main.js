import './Main.css';
import { React, useState } from 'react';
import {FaQuestionCircle, FaInfoCircle} from 'react-icons/fa';
import MainMenuTopBar from '../assets/main-menu-top-bar.png';
import { Route, Link, Router, useNavigate} from 'react-router-dom';
import BtnBird from '../assets/btn_bird.png';
import BtnCat from '../assets/btn_cat.png';
import BtnDragonfly from '../assets/btn_dragonfly.png';
import BtnGopher from '../assets/btn_gopher.png';
import Popup from '../components/Popup';
import PopupVideo from '../components/PopupVideo';
 
function Main(props) {
    let navigate = useNavigate();
    const [trigger, setTrigger] = useState(false);
    const [triggerVideo, setTriggerVideo] = useState(false);
  return (
    <div className="Main">
        <div className="main-menu-top-bar">
            <img className="main-menu-top-bar-image" src={MainMenuTopBar} alt="Top Bar"/>
            <FaInfoCircle className="main-menu-information-button" size="40" onClick={() => {navigate("/information");}}/>
            <FaQuestionCircle className="main-menu-question-button" size="40" onClick={() => {navigate("/question");}}/>
        </div>
        <div className="main-menu-body">
            <div className="main-menu-btn-row">
                <div className='main-menu-btn' onClick={() => {navigate("/introduction");}}>
                    <img className="main-menu-btn-img" src={BtnBird} alt="Button Bird" />
                    <h1>Introduction</h1>
                </div>
                
                <div className='main-menu-btn' onClick={() => {setTrigger(true)}}>
                    <img className="main-menu-btn-img" src={BtnCat} alt="Button Cat" />
                    <h1>Lessons</h1>
                </div>
            </div>
            <div className="main-menu-btn-row">
                <div className='main-menu-btn'  onClick={() => {navigate("/game");}}>
                    <img className="main-menu-btn-img" src={BtnDragonfly} alt="Button Dragonfly" />
                    <h1>Game</h1>
                </div>
                <div className='main-menu-btn'  onClick={() => {setTriggerVideo(true)}}>
                    <img className="main-menu-btn-img" src={BtnGopher} alt="Button Gopher" />
                    <h1>Videos</h1>
                </div>
            </div>
        </div>
        <Popup trigger={trigger} progress={props.progress}/>
        <PopupVideo trigger={triggerVideo} progress={props.progress}/>
    </div>
  );
}

export default Main;