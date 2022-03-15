import './Lesson1.css';
import { React, useState } from 'react';
import Switch from "react-switch";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { IoChevronBack, IoSettingsSharp, IoCloseOutline } from 'react-icons/io5';
import {FaMicrophone, FaPlay, FaStop} from 'react-icons/fa';
import MainMenuTopBar from '../assets/main-menu-top-bar.png';
import { Route, Link, Router, useNavigate} from 'react-router-dom';
import Start2 from '../assets/start2.png';
import ToneButton from '../components/ToneButton';
import GoToButton from '../components/GoToButton';
import Tone2 from '../assets/tone2.png';
import Tone1 from '../assets/tone1.png';
import Tone6 from '../assets/tone6.png';
import fo2 from '../assets/audio/audio-lesson2/fo2.wav';
import seoi2 from '../assets/audio/audio-lesson2/seoi2.wav';
import jam2 from '../assets/audio/audio-lesson2/jam2.wav';
import hoi2gong2 from '../assets/audio/audio-lesson2/hoi2gong2.wav';
import dim2gaai2 from '../assets/audio/audio-lesson2/dim2gaai2.wav';
import gau2jyut6 from '../assets/audio/audio-lesson2/gau2jyut6.wav';
import dei6zi2 from '../assets/audio/audio-lesson2/dei6zi2.wav';
import daa2bo1 from '../assets/audio/audio-lesson2/daa2bo1.wav';
import hoeng1gong2 from '../assets/audio/audio-lesson2/hoeng1gong2.wav';
import geoi2hei2zo2sau2 from '../assets/audio/audio-lesson2/geoi2hei2zo2sau2.wav';
import go2bun2bou2gei2cin2 from '../assets/audio/audio-lesson2/go2bun2bou2gei2cin2.wav';
import gaa1ze1se2zi6hou2maan6 from '../assets/audio/audio-lesson2/gaa1ze1se2zi6hou2maan6.wav';
import {Howl, Howler} from "howler";
 
var blob = "";

function Lesson2() {

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
            blob = new Blob(items, {type: 'audio/wav'});
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
            <h1 className="lesson-menu-top-bar-text">Lesson II</h1>
            <div className="lesson-menu-top-bar-right">
                <IoSettingsSharp className="lesson-menu-settings-button" size="40" onClick={() => {setTrigger(true)}}/>
                {isRecording ? 
                <FaStop className="lesspn-menu-stop-button" size="40" onClick={() => {stopRecording()}}/> :
                <FaMicrophone className="lesson-menu-record-button" size="40" onClick={() => {startRecording()}}/>}
                <FaPlay className="lesson-menu-play-button" size="40" onClick={() => {playBlob(blob);}}/>
            </div>
        </div>
        <div className="lesson-menu-body">
            <h1 className="lesson-menu-text">Lesson II: Tone 2</h1>
            <h2 className="lesson-menu-text">Description:</h2>
            <div className='lesson-menu-tone-description-row'>
                <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin="5px"/>
                <h4 className='lesson-menu-text'>is a rising tone, which rises</h4>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <h4 className='lesson-menu-text'>from</h4>
                <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin="5px"/>
                <h4 className='lesson-menu-text'>to</h4>
                <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin="5px"/>
            </div>
            <div className="lesson-menu-image-div">
                <img src={Start2} alt=""/>
                <p className='lesson-menu-text'>For Mandarin speakers: The pronunciation of Cantonese Tone 2 is similar to that of Mandarin Tone 2.</p>
                <h1 className='lesson-menu-text'>Words</h1>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(fo2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "fo" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "火" font="45px" color="#dc404f" />) : (<ToneButton text = "火" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>fire</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(seoi2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "seoi" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "水" font="45px" color="#dc404f" />) : (<ToneButton text = "水" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>water</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(jam2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jam" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "飲" font="45px" color="#dc404f" />) : (<ToneButton text = "飲" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>drink</p> 
                    </div>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(hoi2gong2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hoi" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "海" font="45px" color="#dc404f" />) : (<ToneButton text = "海" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gong" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "港" font="45px" color="#dc404f" />) : (<ToneButton text = "港" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>harbour</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(dim2gaai2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "dim" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "點" font="45px" color="#dc404f" />) : (<ToneButton text = "點" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gaai" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "解" font="45px" color="#dc404f" />) : (<ToneButton text = "解" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>why</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(gau2jyut6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gau" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "九" font="45px" color="#dc404f" />) : (<ToneButton text = "九" font="45px" color="#f8f7e2" fontColor="#000000"/>)
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
                    <p>September</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(dei6zi2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "dei" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "地" font="45px" color="#000000" />) : (<ToneButton text = "地" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "zi" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "址" font="45px" color="#dc404f" />) : (<ToneButton text = "址" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>address</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(daa2bo1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "daa" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "打" font="45px" color="#dc404f" />) : (<ToneButton text = "打" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "bo" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "波" font="45px" color="#5b9bd5" />) : (<ToneButton text = "波" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>playing ball games</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(hoeng1gong2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hoeng" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "香" font="45px" color="#5b9bd5" />) : (<ToneButton text = "香" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gong" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "港" font="45px" color="#dc404f" />) : (<ToneButton text = "港" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Hong Kong</p>
                </div>
            </div>
            <div className="lesson-menu-image-div">
                <h1 className='lesson-menu-text'>Sentences</h1>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(geoi2hei2zo2sau2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "geoi" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "舉" font="45px" color="#dc404f" />) : (<ToneButton text = "舉" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hei" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "起" font="45px" color="#dc404f" />) : (<ToneButton text = "起" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "zo" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "左" font="45px" color="#dc404f" />) : (<ToneButton text = "左" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "sau" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "手" font="45px" color="#dc404f" />) : (<ToneButton text = "手" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Raise your left hand.</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(go2bun2bou2gei2cin2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "go" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "嗰" font="45px" color="#dc404f" />) : (<ToneButton text = "嗰" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "bun" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "本" font="45px" color="#dc404f" />) : (<ToneButton text = "本" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "bou" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "簿" font="45px" color="#dc404f" />) : (<ToneButton text = "簿" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gei" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "幾" font="45px" color="#dc404f" />) : (<ToneButton text = "幾" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "cin" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "錢" font="45px" color="#dc404f" />) : (<ToneButton text = "錢" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>How much is that notepad ?</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(gaa1ze1se2zi6hou2maan6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gaa" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "家" font="45px" color="#5b9bd5" />) : (<ToneButton text = "家" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ze" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "姐" font="45px" color="#5b9bd5" />) : (<ToneButton text = "姐" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "se" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "寫" font="45px" color="#dc404f" />) : (<ToneButton text = "寫" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "zi" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "字" font="45px" color="#000000" />) : (<ToneButton text = "字" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hou" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "好" font="45px" color="#dc404f" />) : (<ToneButton text = "好" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "maan" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "慢" font="45px" color="#000000" />) : (<ToneButton text = "慢" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>My elder sister writes quite slow.</p>
                </div>
            </div>
            <GoToButton text="Go To Quiz" onClick={() => {navigate("/quiz2");}}/>
        </div>
        <SettingsPopup trigger={trigger}/>
    </div>
  );
}

export default Lesson2;
