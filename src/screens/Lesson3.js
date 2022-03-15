import './Lesson1.css';
import { React, useState } from 'react';
import Switch from "react-switch";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { IoChevronBack, IoSettingsSharp, IoCloseOutline } from 'react-icons/io5';
import {FaMicrophone, FaPlay, FaStop} from 'react-icons/fa';
import MainMenuTopBar from '../assets/main-menu-top-bar.png';
import { Route, Link, Router, useNavigate} from 'react-router-dom';
import Start3 from '../assets/start3.png';
import ToneButton from '../components/ToneButton';
import GoToButton from '../components/GoToButton';
import Tone1 from '../assets/tone1.png';
import Tone3 from '../assets/tone3.png';
import Tone6 from '../assets/tone6.png';
import Goek3 from '../assets/audio/audio-lesson3/goek3.wav';
import Siu3 from '../assets/audio/audio-lesson3/siu3.wav';
import Sei3 from '../assets/audio/audio-lesson3/sei3.wav';
import Dim3Pou3 from '../assets/audio/audio-lesson3/dim3pou3.wav';
import Hing3Ceoi3 from '../assets/audio/audio-lesson3/hing3ceoi3.wav';
import Fo3Sat1 from '../assets/audio/audio-lesson3/fo3sat1.wav';
import Gaa1Gaa3 from '../assets/audio/audio-lesson3/gaa1gaa3.wav';
import Sai3Lou6 from '../assets/audio/audio-lesson3/sai3lou6.wav';
import Dei6Tit3 from '../assets/audio/audio-lesson3/dei6tit3.wav';
import go3sung3taai3gwai3 from '../assets/audio/audio-lesson3/go3sung3taai3gwai3.wav';
import aan3zau3paai3daap3on3 from '../assets/audio/audio-lesson3/aan3zau3paai3daap3on3.wav';
import aa3go1baat3jyut6heoi3ngoi6gwok3 from '../assets/audio/audio-lesson3/aa3go1baat3jyut6heoi3ngoi6gwok3.wav';
import {Howl, Howler} from "howler";
 
var blob = "";

function Lesson3() {

    const SoundPlay = (src) => {
        const sound = new Howl({
            src: src
        })
        sound.play();
    }
    Howler.volume(1.0);

    const [isRecording, setIsRecording] = useState(false);

   function playBlob(blob, fileName) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        console.log(blob);
        var url = window.URL.createObjectURL(blob);
        var sound = new Howl({
            src: [url],
            format: ['wav']
        });
        sound.play();
        console.log("played");
    }

  function startRecording(){

    var device = navigator.mediaDevices.getUserMedia({audio:true});
    var items = [];
    device.then( stream => {
      var recorder = new MediaRecorder(stream);
      recorder.ondataavailable = e => {

        items.push(e.data);
        if(recorder.state === "inactive")
        {
          console.log(blob);
          blob = new Blob(items, {type: 'audio/wav'});
          console.log(blob);
          //alert(blob.type);
        }
      }
      setIsRecording(true);
      recorder.start();
      setTimeout(()=>{
          setIsRecording(false);
        recorder.stop();
      }, 6000);

    }); }

    function stopRecording() {
        var device = navigator.mediaDevices.getUserMedia({audio:true});
        var items = [];
        device.then( stream => {
        var recorder = new MediaRecorder(stream);
        recorder.ondataavailable = e => {

            items.push(e.data);
            if(recorder.state === "inactive")
            {
            var blob = new Blob(items, {type: 'audio/wav'});
            //alert(blob.type);
            }
        }
        setIsRecording(false);
        recorder.stop();

        });
     }

    let navigate = useNavigate();
    const [level, setLevel] = useState(true);
    const handleLevel = nextChecked => {
        setLevel(nextChecked);
    };
    const [tone_color, setToneColor] = useState(true);
    const handleToneColor = nextChecked => {
        setToneColor(nextChecked);
    };
    const [chinese_word, setChineseWord] = useState(true);
    const handleChineseWord = nextChecked => {
        setChineseWord(nextChecked);
    };
    const [jyutping, setJyutping] = useState(true);
    const handleJyutping = nextChecked => {
        setJyutping(nextChecked);
    };
    const [tone, setTone] = useState(true);
    const handleTone = nextChecked => {
        setTone(nextChecked);
    };

    const [trigger, setTrigger] = useState(false);

    function SettingsPopup() {
        let navigate = useNavigate();
        return (trigger ?
        <div className='settings-popup'>
            <div className="lesson-menu-switch-div">
                <div className="lesson-menu-switch-div-close">
                    <IoCloseOutline onClick={() => setTrigger(false)} size="30px"/>
                </div>
                <div className="lesson-menu-switch-row">
                    <h3 className="lesson-menu-switch-description">Show Level</h3>
                    <Switch onChange={handleLevel} checked={level} className="react-switch"/>
                </div>
                <div className="lesson-menu-switch-row">
                    <h3 className="lesson-menu-switch-description">Show Tone Color</h3>
                    <Switch onChange={handleToneColor} checked={tone_color} className="react-switch"/>
                </div>
                <div className="lesson-menu-switch-row">
                    <h3 className="lesson-menu-switch-description">Show Chinese Word</h3>
                    <Switch onChange={handleChineseWord} checked={chinese_word} className="react-switch"/>
                </div>
                <div className="lesson-menu-switch-row">
                    <h3 className="lesson-menu-switch-description">Show Jyutping</h3>
                    <Switch onChange={handleJyutping} checked={jyutping} className="react-switch"/>
                </div>
                <div className="lesson-menu-switch-row">
                    <h3 className="lesson-menu-switch-description">Show Tone</h3>
                    <Switch onChange={handleTone} checked={tone} className="react-switch"/>
                </div>
                <div className="lesson-menu-word center-settings">
                    {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                    <p>{jyutping ? "bui" : ""}{tone ? "1" : ""}</p>
                    {chinese_word ? 
                    tone_color ? (<ToneButton text = "杯" font="45px" color="#5b9bd5" />) : (<ToneButton text = "杯" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                    : 
                    <></>}
                    <p>cup</p> 
                </div>
            </div>
        </div> :
        <></>);
    }

  return (
    <div className="Lesson">
        <div className="lesson-menu-top-bar">
            <div className="lesson-menu-top-bar-left" onClick={() => {navigate("/");}}>
                <IoChevronBack className="lesson-menu-top-bar-icon"size="50"/>
                <h2 className="lesson-menu-top-bar-icon-text">Home</h2>
            </div>
            <h1 className="lesson-menu-top-bar-text">Lesson III</h1>
            <div className="lesson-menu-top-bar-right">
                <IoSettingsSharp className="lesson-menu-settings-button" size="40" onClick={() => {setTrigger(true)}}/>
                {isRecording ? 
                <FaStop className="lesson-menu-stop-button" size="40" onClick={() => {stopRecording()}}/> :
                <FaMicrophone className="lesson-menu-record-button" size="40" onClick={() => {startRecording()}}/>}
                <FaPlay className="lesson-menu-play-button" size="40" onClick={() => {playBlob(blob);}}/>
            </div>
        </div>
        <div className="lesson-menu-body">
            <h1 className="lesson-menu-text">Lesson III: Tone 3</h1>
            <h2 className="lesson-menu-text">Description:</h2>
            <div className='lesson-menu-tone-description-row'>
                <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0}/>
                <h4 className='lesson-menu-text'>has a mid level pitch, which lies between</h4>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
                <h4 className='lesson-menu-text'> and </h4>
                <h4 className='lesson-menu-text'> </h4>
                <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
                <h4 className='lesson-menu-text'>.</h4>
            </div>
            <div className="lesson-menu-image-div">
                <img src={Start3} alt=""/>
                <h1 className='lesson-menu-text'>Words</h1>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Goek3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "goek" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "腳" font="45px" color="#a9d18e" />) : (<ToneButton text = "腳" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>foot</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Siu3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "siu" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "笑" font="45px" color="#a9d18e" />) : (<ToneButton text = "笑" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>laugh</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Sei3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "sei" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "四" font="45px" color="#a9d18e" />) : (<ToneButton text = "四" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>four</p> 
                    </div>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Dim3Pou3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "dim" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "店" font="45px" color="#a9d18e" />) : (<ToneButton text = "店" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "pou" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "舖" font="45px" color="#a9d18e" />) : (<ToneButton text = "舖" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>shop</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Hing3Ceoi3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hing" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "興" font="45px" color="#a9d18e" />) : (<ToneButton text = "興" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ceoi" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "趣" font="45px" color="#a9d18e" />) : (<ToneButton text = "趣" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>hobby</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Fo3Sat1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "fo" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "課" font="45px" color="#a9d18e" />) : (<ToneButton text = "課" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "sat" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "室" font="45px" color="#5b9bd5" />) : (<ToneButton text = "室" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>classroom</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Gaa1Gaa3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gaa" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "加" font="45px" color="#5b9bd5" />) : (<ToneButton text = "加" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gaa" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "價" font="45px" color="#a9d18e" />) : (<ToneButton text = "價" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>raise the price</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Sai3Lou6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "sai" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "細" font="45px" color="#a9d18e" />) : (<ToneButton text = "細" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "lou" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "路" font="45px" color="#000000" />) : (<ToneButton text = "路" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>kid</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Dei6Tit3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "dei" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "地" font="45px" color="#000000" />) : (<ToneButton text = "地" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "tit" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "鐵" font="45px" color="#a9d18e" />) : (<ToneButton text = "鐵" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>subway</p>
                </div>
            </div>
            <div className="lesson-menu-image-div">
                <h1 className='lesson-menu-text'>Sentences</h1>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(go3sung3taai3gwai3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "go" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "個" font="45px" color="#a9d18e" />) : (<ToneButton text = "個" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "sung" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "餸" font="45px" color="#a9d18e" />) : (<ToneButton text = "餸" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "taai" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "太" font="45px" color="#a9d18e" />) : (<ToneButton text = "太" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gwai" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "貴" font="45px" color="#a9d18e" />) : (<ToneButton text = "貴" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>This side dish is too expensive.</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(aan3zau3paai3daap3on3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "aan" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "晏" font="45px" color="#a9d18e" />) : (<ToneButton text = "晏" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "zau" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "晝" font="45px" color="#a9d18e" />) : (<ToneButton text = "晝" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "paai" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "派" font="45px" color="#a9d18e" />) : (<ToneButton text = "派" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "daap" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "答" font="45px" color="#a9d18e" />) : (<ToneButton text = "答" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "on" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "案" font="45px" color="#a9d18e" />) : (<ToneButton text = "案" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Will the answers be distributed in the afternoon?</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(aa3go1baat3jyut6heoi3ngoi6gwok3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "aa" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "阿" font="45px" color="#a9d18e" />) : (<ToneButton text = "阿" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "go" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "哥" font="45px" color="#5b9bd5" />) : (<ToneButton text = "哥" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "baat" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "八" font="45px" color="#a9d18e" />) : (<ToneButton text = "八" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jyut" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "月" font="45px" color="#000000" />) : (<ToneButton text = "月" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "heoi" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "去" font="45px" color="#a9d18e" />) : (<ToneButton text = "去" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ngoi" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "外" font="45px" color="#000000" />) : (<ToneButton text = "外" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gwok" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "國" font="45px" color="#a9d18e" />) : (<ToneButton text = "國" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>My elder brother will go abroad in August.</p>
                </div>
            </div>
            <GoToButton text="Go To Quiz" onClick={() => {navigate("/quiz3");}}/>
        </div>
        <SettingsPopup trigger={trigger}/>
    </div>
  );
}

export default Lesson3;