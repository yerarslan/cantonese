import './Lesson1.css';
import { React, useState } from 'react';
import Switch from "react-switch";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { IoChevronBack, IoSettingsSharp, IoCloseOutline } from 'react-icons/io5';
import {FaMicrophone, FaPlay, FaStop} from 'react-icons/fa';
import MainMenuTopBar from '../assets/main-menu-top-bar.png';
import { Route, Link, Router, useNavigate} from 'react-router-dom';
import Start5 from '../assets/start5.png';
import ToneButton from '../components/ToneButton';
import GoToButton from '../components/GoToButton';
import Tone1 from '../assets/tone1.png';
import Tone3 from '../assets/tone3.png';
import Tone5 from '../assets/tone5.png';
import Tone6 from '../assets/tone6.png';
import ngaan5 from '../assets/audio/audio-lesson4/ngaan5.wav';
import ng5 from '../assets/audio/audio-lesson4/ng5.wav';
import maa5 from '../assets/audio/audio-lesson4/maa5.wav';
import maai5je5 from '../assets/audio/audio-lesson4/maai5je5.wav';
import maa5ngai5 from '../assets/audio/audio-lesson4/maa5ngai5.wav';
import mui5jat6 from '../assets/audio/audio-lesson4/mui5jat6.wav';
import maai6je5 from '../assets/audio/audio-lesson4/maai6je5.wav';
import lai5baai3 from '../assets/audio/audio-lesson4/lai5baai3.wav';
import tiu3mou5 from '../assets/audio/audio-lesson4/tiu3mou5.wav';
import keoi5jau5tou5naam5 from '../assets/audio/audio-lesson4/keoi5jau5tou5naam5.wav';
import keoi5maan5maan5soeng5mong5 from '../assets/audio/audio-lesson4/keoi5maan5maan5soeng5mong5.wav';
import keoi5dei6heoi3sik6je5 from '../assets/audio/audio-lesson4/keoi5dei6heoi3sik6je5.wav';
import {Howl, Howler} from "howler";
 
var blob = "";

function Lesson4() {

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
            <h1 className="lesson-menu-top-bar-text">Lesson IV</h1>
            <div className="lesson-menu-top-bar-right">
                <IoSettingsSharp className="lesson-menu-settings-button" size="40" onClick={() => {setTrigger(true)}}/>
                {isRecording ? 
                <FaStop className="lesson-menu-stop-button" size="40" onClick={() => {stopRecording()}}/> :
                <FaMicrophone className="lesson-menu-record-button" size="40" onClick={() => {startRecording()}}/>}
                <FaPlay className="lesson-menu-play-button" size="40" onClick={() => {playBlob(blob);}}/>
            </div>
        </div>
        <div className="lesson-menu-body">
            <h1 className="lesson-menu-text">Lesson IV: Tone 5</h1>
            <h2 className="lesson-menu-text">Description:</h2>
            <div className='lesson-menu-tone-description-row'>
                <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0}/>
                <h4 className='lesson-menu-text'> is a rising tone, which rises</h4>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <h4 className='lesson-menu-text'>from </h4>
                <h4 className='lesson-menu-text'> </h4>
                <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
                <h4 className='lesson-menu-text'> to </h4>
                <h4 className='lesson-menu-text'> </h4>
                <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0}/>
            </div>
            <div className="lesson-menu-image-div">
                <img src={Start5} alt=""/>
                <h1 className='lesson-menu-text'>Words</h1>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(ngaan5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ngaan" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "眼" font="45px" color="#7030a0" />) : (<ToneButton text = "眼" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>eye</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(ng5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ng" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "五" font="45px" color="#7030a0" />) : (<ToneButton text = "五" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>five</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(maa5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maa" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "馬" font="45px" color="#7030a0" />) : (<ToneButton text = "馬" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>horse</p> 
                    </div>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(maai5je5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maai" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "買" font="45px" color="#7030a0" />) : (<ToneButton text = "買" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div><div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "je" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "嘢" font="45px" color="#7030a0" />) : (<ToneButton text = "嘢" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>buy something</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(maa5ngai5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maa" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "螞" font="45px" color="#7030a0" />) : (<ToneButton text = "螞" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div><div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ngai" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "蟻" font="45px" color="#7030a0" />) : (<ToneButton text = "蟻" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>ant</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(mui5jat6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "mui" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "每" font="45px" color="#7030a0" />) : (<ToneButton text = "每" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jat" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "日" font="45px" color="#000000" />) : (<ToneButton text = "日" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>everyday</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(maai6je5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maai" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "賣" font="45px" color="#000000" />) : (<ToneButton text = "賣" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "je" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "嘢" font="45px" color="#7030a0" />) : (<ToneButton text = "嘢" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>sell something</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(lai5baai3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "lai" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "禮" font="45px" color="#7030a0" />) : (<ToneButton text = "禮" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "baai" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "拜" font="45px" color="#a9d18e" />) : (<ToneButton text = "拜" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>week</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(tiu3mou5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "tiu" : ""}{tone ? "3" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "跳" font="45px" color="#a9d18e" />) : (<ToneButton text = "跳" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "mou" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "舞" font="45px" color="#7030a0" />) : (<ToneButton text = "舞" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>dancing</p>
                </div>
            </div>
            <div className="lesson-menu-image-div">
                <h1 className='lesson-menu-text'>Sentences</h1>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(keoi5jau5tou5naam5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "keoi" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "佢" font="45px" color="#7030a0" />) : (<ToneButton text = "佢" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jau" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "有" font="45px" color="#7030a0" />) : (<ToneButton text = "有" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "tou" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "肚" font="45px" color="#7030a0" />) : (<ToneButton text = "肚" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "naam" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "腩" font="45px" color="#7030a0" />) : (<ToneButton text = "腩" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>He has a pot belly.</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(keoi5maan5maan5soeng5mong5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "keoi" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "佢" font="45px" color="#7030a0" />) : (<ToneButton text = "佢" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maan" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "晚" font="45px" color="#7030a0" />) : (<ToneButton text = "晚" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maan" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "晚" font="45px" color="#7030a0" />) : (<ToneButton text = "晚" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "soeng" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "上" font="45px" color="#7030a0" />) : (<ToneButton text = "上" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "mong" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "網" font="45px" color="#7030a0" />) : (<ToneButton text = "網" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Does he surf the Internet every night?</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(keoi5dei6heoi3sik6je5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "keoi" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "佢" font="45px" color="#7030a0" />) : (<ToneButton text = "佢" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "dei" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "哋" font="45px" color="#000000" />) : (<ToneButton text = "哋" font="45px" color="#f8f7e2" fontColor="#000000"/>)
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
                        <p>{jyutping ? "sik" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "食" font="45px" color="#000000" />) : (<ToneButton text = "食" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "je" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "嘢" font="45px" color="#7030a0" />) : (<ToneButton text = "嘢" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>They go to eat something.</p>
                </div>
            </div>
            <GoToButton text="Go To Quiz" onClick={() => {navigate("/quiz4");}}/>
        </div>
        <SettingsPopup trigger={trigger}/>
    </div>
  );
}

export default Lesson4;