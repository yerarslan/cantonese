import './Lesson1.css';
import { React, useState } from 'react';
import Switch from "react-switch";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { IoChevronBack, IoSettingsSharp, IoCloseOutline } from 'react-icons/io5';
import {FaMicrophone, FaPlay, FaStop} from 'react-icons/fa';
import MainMenuTopBar from '../assets/main-menu-top-bar.png';
import { Route, Link, Router, useNavigate} from 'react-router-dom';
import Start4 from '../assets/start4.png';
import ToneButton from '../components/ToneButton';
import GoToButton from '../components/GoToButton';
import Tone1 from '../assets/tone1.png';
import Tone4 from '../assets/tone4.png';
import Tone6 from '../assets/tone6.png';
import jan4 from '../assets/audio/audio-lesson5/jan4.wav';
import cong4 from '../assets/audio/audio-lesson5/cong4.wav';
import lai4 from '../assets/audio/audio-lesson5/lai4.wav';
import ngan4hong4 from '../assets/audio/audio-lesson5/ngan4hong4.wav';
import taan4kam4 from '../assets/audio/audio-lesson5/taan4kam4.wav';
import tung4hok6 from '../assets/audio/audio-lesson5/tung4hok6.wav';
import cam4jat6 from '../assets/audio/audio-lesson5/cam4jat6.wav';
import lok6tong4 from '../assets/audio/audio-lesson5/lok6tong4.wav';
import din6jau4 from '../assets/audio/audio-lesson5/din6jau4.wav';
import pui4maa4maa4jau4 from '../assets/audio/audio-lesson5/pui4maa4maa4jau4.wav';
import paai4kau4naan4m4naan4 from '../assets/audio/audio-lesson5/paai4kau4naan4m4naan4.wav';
import cin4min6zau6hai6caa4lau4 from '../assets/audio/audio-lesson5/cin4min6zau6hai6caa4lau4.wav';
import {Howl, Howler} from "howler";
 
var blob = "";

function Lesson5() {

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
            <h1 className="lesson-menu-top-bar-text">Lesson V</h1>
            <div className="lesson-menu-top-bar-right">
                <IoSettingsSharp className="lesson-menu-settings-button" size="40" onClick={() => {setTrigger(true)}}/>
                {isRecording ? 
                <FaStop className="lesson-menu-stop-button" size="40" onClick={() => {stopRecording()}}/> :
                <FaMicrophone className="lesson-menu-record-button" size="40" onClick={() => {startRecording()}}/>}
                <FaPlay className="lesson-menu-play-button" size="40" onClick={() => {playBlob(blob);}}/>
            </div>
        </div>
        <div className="lesson-menu-body">
            <h1 className="lesson-menu-text">Lesson V: Tone 4</h1>
            <h2 className="lesson-menu-text">Description:</h2>
            <div className='lesson-menu-tone-description-row'>
                <ToneButton className="lesson-menu-tone-btn" color="#843c0c" text="Tone 4" margin={0}/>
                <h4 className='lesson-menu-text'>has an extra low pitch,</h4>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <h4 className='lesson-menu-text'>which lies under</h4>
                <h4 className='lesson-menu-text'> </h4>
                <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
                <h4 className='lesson-menu-text'>.</h4>
            </div>
            <div className="lesson-menu-image-div">
                <img src={Start4} alt=""/>
                <h1 className='lesson-menu-text'>Words</h1>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#843c0c" text="Tone 4" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(jan4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jan" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "人" font="45px" color="#843c0c" />) : (<ToneButton text = "人" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>people</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(cong4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "cong" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "床" font="45px" color="#843c0c" />) : (<ToneButton text = "床" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>bed</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(lai4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "lai" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "嚟" font="45px" color="#843c0c" />) : (<ToneButton text = "嚟" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>come</p> 
                    </div>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#843c0c" text="Tone 4" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#843c0c" text="Tone 4" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(ngan4hong4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ngan" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "銀" font="45px" color="#843c0c" />) : (<ToneButton text = "銀" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hong" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "行" font="45px" color="#843c0c" />) : (<ToneButton text = "行" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>bank</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(taan4kam4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "taan" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "彈" font="45px" color="#843c0c" />) : (<ToneButton text = "彈" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>} 
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "kam" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "琴" font="45px" color="#843c0c" />) : (<ToneButton text = "琴" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>play the piano</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#843c0c" text="Tone 4" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(tung4hok6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "tung" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "同" font="45px" color="#843c0c" />) : (<ToneButton text = "同" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hok" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "學" font="45px" color="#000000" />) : (<ToneButton text = "學" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>classmate</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(cam4jat6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "cam" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "琴" font="45px" color="#843c0c" />) : (<ToneButton text = "琴" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jat" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "學" font="45px" color="#000000" />) : (<ToneButton text = "學" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>yesterday</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#843c0c" text="Tone 4" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(lok6tong4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "lok" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "落" font="45px" color="#000000" />) : (<ToneButton text = "落" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "tong" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "堂" font="45px" color="#843c0c" />) : (<ToneButton text = "堂" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>dismiss the class</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(din6jau4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "din" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "電" font="45px" color="#000000" />) : (<ToneButton text = "電" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jau" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "郵" font="45px" color="#843c0c" />) : (<ToneButton text = "郵" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>e-mail</p>

                </div>
            </div>
            <div className="lesson-menu-image-div">
                <h1 className='lesson-menu-text'>Sentences</h1>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(pui4maa4maa4jau4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "pui" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "陪" font="45px" color="#843c0c" />) : (<ToneButton text = "陪" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maa" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "嫲" font="45px" color="#843c0c" />) : (<ToneButton text = "嫲" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maa" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "嫲" font="45px" color="#843c0c" />) : (<ToneButton text = "嫲" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jau" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "游" font="45px" color="#843c0c" />) : (<ToneButton text = "游" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Go swim with grandma.</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(paai4kau4naan4m4naan4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "paai" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "排" font="45px" color="#843c0c" />) : (<ToneButton text = "排" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "kau" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "球" font="45px" color="#843c0c" />) : (<ToneButton text = "球" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "naan" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "難" font="45px" color="#843c0c" />) : (<ToneButton text = "難" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "m" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "唔" font="45px" color="#843c0c" />) : (<ToneButton text = "唔" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "naan" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "難" font="45px" color="#843c0c" />) : (<ToneButton text = "難" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Is it hard to play the volleyball?</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(cin4min6zau6hai6caa4lau4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "cin" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "前" font="45px" color="#843c0c" />) : (<ToneButton text = "前" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "min" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "面" font="45px" color="#000000" />) : (<ToneButton text = "面" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "zau" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "就" font="45px" color="#000000" />) : (<ToneButton text = "就" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hai" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "係" font="45px" color="#000000" />) : (<ToneButton text = "係" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "caa" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "茶" font="45px" color="#843c0c" />) : (<ToneButton text = "茶" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "lau" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "樓" font="45px" color="#843c0c" />) : (<ToneButton text = "樓" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>The dimsum restaurant is up ahead.</p>
                </div>
            </div>
            <GoToButton text="Go To Quiz" onClick={() => {navigate("/quiz5");}}/>
        </div>
        <SettingsPopup trigger={trigger}/>
    </div>
  );
}

export default Lesson5;