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
import Tone2 from '../assets/tone2.png';
import Tone3 from '../assets/tone3.png';
import Tone4 from '../assets/tone4.png';
import Tone5 from '../assets/tone5.png';
import Tone6 from '../assets/tone6.png';
import fei1 from '../assets/audio/audio-supp/fei1.wav';
import fei4 from '../assets/audio/audio-supp/fei4.wav';
import ze1 from '../assets/audio/audio-supp/ze1.wav';
import ze6 from '../assets/audio/audio-supp/ze6.wav';
import coeng2 from '../assets/audio/audio-supp/coeng2.wav';
import coeng1 from '../assets/audio/audio-supp/coeng1.wav';
import fan3 from '../assets/audio/audio-supp/fan3.wav';
import fan1 from '../assets/audio/audio-supp/fan1.wav';
import ngo5 from '../assets/audio/audio-supp/ngo5.wav';
import ngo6 from '../assets/audio/audio-supp/ngo6.wav';
import man4 from '../assets/audio/audio-supp/man4.wav';
import man6 from '../assets/audio/audio-supp/man6.wav';

import {Howl, Howler} from "howler";
 
var blob = "";

function Notes() {

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
            <h1 className="lesson-menu-top-bar-text">Supplementary</h1>
            <div className="lesson-menu-top-bar-right">
                <IoSettingsSharp className="lesson-menu-settings-button" size="40" onClick={() => {setTrigger(true)}}/>
                {isRecording ? 
                <FaStop className="lesson-menu-stop-button" size="40" onClick={() => {stopRecording()}}/> :
                <FaMicrophone className="lesson-menu-record-button" size="40" onClick={() => {startRecording()}}/>}
                <FaPlay className="lesson-menu-play-button" size="40" onClick={() => {playBlob(blob);}}/>
            </div>
        </div>
        <div className="lesson-menu-body">
            <h2 className="lesson-menu-text">Supplementary Mote: Distinguish words by tones</h2>
            <div className='lesson-menu-tone-description-row'>
                <h3 className='lesson-menu-text'>Which character is Tone 1?</h3>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(fei1)}>
                    <div className="lesson-menu-word white" >
                        <p>{jyutping ? "fei" : ""}{tone ? "" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "飛" font="45px" color="#4e3b30" />) : (<ToneButton text = "飛" font="45px" color="##4e3b30"/>)
                        : 
                        <></>}
                        <p>fly</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(fei4)}>
                    <div className="lesson-menu-word white">
                        <p>{jyutping ? "fei" : ""}{tone ? "" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "肥" font="45px" color="#4e3b30" />) : (<ToneButton text = "肥" font="45px" color="#4e3b30"/>)
                        : 
                        <></>}
                        <p>fat</p> 
                    </div>
                </div>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <h3 className='lesson-menu-text'>Have you noticed that these two characters have exactly the same pronunciation except for their tones? </h3>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <div className="lesson-menu-word white"   onClick={() => SoundPlay(fei1)}>
                        <p>{jyutping ? "fei" : ""}{tone ? "" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "飛" font="45px" color="#308fd7" />) : (<ToneButton text = "飛" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>fly</p> 
                </div>
                <h3 className='lesson-menu-text'> is </h3>
                <ToneButton className="lesson-menu-tone-btn" color="#308fd7" text="Tone 1" margin={0} marginLeft="20px" marginRight="20px"/>
                <h3 className='lesson-menu-text'> while </h3>
                <div className="lesson-menu-word white"   onClick={() => SoundPlay(fei4)}>
                        <p>{jyutping ? "fei" : ""}{tone ? "" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "肥" font="45px" color="#843c0c" />) : (<ToneButton text = "肥" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>fat</p> 
                </div>
                <h3 className='lesson-menu-text'> is </h3>
                <ToneButton className="lesson-menu-tone-btn" color="#843c0c" text="Tone 4" margin={0} marginLeft="20px"/>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <h3 className='lesson-menu-text'>It is the tone that distinguishes their meanings. You actually have come across a lot of this kind of examples in the previous lessons. Let’s revise some of them now:</h3>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(ze1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ze" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "遮" font="45px" color="#5b9bd5" />) : (<ToneButton text = "遮" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>umbrella</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(ze6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ze" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "謝" font="45px" color="#000000" />) : (<ToneButton text = "謝" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>wither</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#dc404f" text="Tone 2" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(coeng2)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone2} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "coeng" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "搶" font="45px" color="#dc404f" />) : (<ToneButton text = "搶" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>rob</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(coeng1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "coeng" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "槍" font="45px" color="#5b9bd5" />) : (<ToneButton text = "槍" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>gun</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(fan3)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone3} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "fan" : ""}{tone ? "2" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "瞓" font="45px" color="#a9d18e" />) : (<ToneButton text = "瞓" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>sleep</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(fan1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "fan" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "分" font="45px" color="#5b9bd5" />) : (<ToneButton text = "分" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>score</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#7030a0" text="Tone 5" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(ngo5)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone5} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ngo" : ""}{tone ? "5" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "我" font="45px" color="#7030a0" />) : (<ToneButton text = "我" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>me</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(ngo6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ngo" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "餓" font="45px" color="#000000" />) : (<ToneButton text = "餓" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>hungry</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#843c0c" text="Tone 4" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(man4)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone4} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "man" : ""}{tone ? "4" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "聞" font="45px" color="#843c0c" />) : (<ToneButton text = "聞" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>smell</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(man6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "man" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "問" font="45px" color="#000000" />) : (<ToneButton text = "問" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>ask</p>
                </div>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <h3 className='lesson-menu-text'>Unlike in English, where it is somewhat flexible to alter the pitches, Cantonese is more restricted as different tones would suggest different meanings.</h3>
            </div>
        </div>
        <SettingsPopup trigger={trigger}/>
    </div>
  );
}

export default Notes;