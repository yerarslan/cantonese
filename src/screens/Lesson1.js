import './Lesson1.css';
import { React, useState } from 'react';
import Switch from "react-switch";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { IoChevronBack, IoSettingsSharp, IoCloseOutline } from 'react-icons/io5';
import {FaMicrophone, FaPlay, FaStop} from 'react-icons/fa';
import MainMenuTopBar from '../assets/main-menu-top-bar.png';
import { Route, Link, Router, useNavigate} from 'react-router-dom';
import Start1 from '../assets/start1.png';
import ToneButton from '../components/ToneButton';
import GoToButton from '../components/GoToButton';
import Tone1 from '../assets/tone1.png';
import Tone6 from '../assets/tone6.png';
import Tin1 from '../assets/audio/audio-lesson1/tin1.wav';
import Bui1 from '../assets/audio/audio-lesson1/bui1.wav';
import Jat1 from '../assets/audio/audio-lesson1/jat1.wav';
import Dei6 from '../assets/audio/audio-lesson1/dei6.wav';
import Bui6 from '../assets/audio/audio-lesson1/bui6.wav';
import Luk6 from '../assets/audio/audio-lesson1/luk6.wav';
import Fei1Gei1 from '../assets/audio/audio-lesson1/fei1gei1.wav';
import Syu1Cim1 from '../assets/audio/audio-lesson1/syu1cim1.wav';
import Seoi6Dou6 from '../assets/audio/audio-lesson1/seoi6dou6.wav';
import Daai6Hok6 from '../assets/audio/audio-lesson1/daai6hok6.wav';
import Faan1Hok6 from '../assets/audio/audio-lesson1/faan1hok6.wav';
import Syu1Fuk6 from '../assets/audio/audio-lesson1/syu1fuk6.wav';
import Hok6Saang1 from '../assets/audio/audio-lesson1/hok6saang1.wav';
import Haau6Baa1 from '../assets/audio/audio-lesson1/haau6baa1.wav';
import Zyun1Sam1Di1Teng1Syu1 from '../assets/audio/audio-lesson1/zyun1sam1di1teng1syu1.wav';
import Sik6Faan6Ding6Sik6Min6 from '../assets/audio/audio-lesson1/sik6faan6ding6sik6min6.wav';
import Gam1Jat6Hai6Saam1Hou6 from '../assets/audio/audio-lesson1/gam1jat6hai6saam1hou6.wav';
import Bin1Dou6Lok6Ce1 from '../assets/audio/audio-lesson1/bin1dou6lok6ce1.wav';
import {Howl, Howler} from "howler";
 
var blob = "";

function Lesson1() {

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
            <h1 className="lesson-menu-top-bar-text">Lesson I</h1>
            <div className="lesson-menu-top-bar-right">
                <IoSettingsSharp className="lesson-menu-settings-button" size="40" onClick={() => {setTrigger(true)}}/>
                {isRecording ? 
                <FaStop className="lesson-menu-stop-button" size="40" onClick={() => {stopRecording()}}/> :
                <FaMicrophone className="lesson-menu-record-button" size="40" onClick={() => {startRecording()}}/>}
                <FaPlay className="lesson-menu-play-button" size="40" onClick={() => {playBlob(blob);}}/>
            </div>
        </div>
        <div className="lesson-menu-body">
            <h1 className="lesson-menu-text">Lesson I: Tone 1 and Tone 6</h1>
            <h2 className="lesson-menu-text">Description:</h2>
            <div className='lesson-menu-tone-description-row'>
                <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
                <h4 className='lesson-menu-text'>has a high pitch while</h4>
            </div>
            <div className='lesson-menu-tone-description-row'>
                <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
                <h4 className='lesson-menu-text'>has a low pitch</h4>
            </div>
            <div className="lesson-menu-image-div">
                <img src={Start1} alt=""/>
                <p className='lesson-menu-text'>For Mandarin speakers: The pronunciation of Cantonese Tone 1 is similar to that of Mandarit Tone 1.</p>
                <h1 className='lesson-menu-text'>Words</h1>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Tin1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "tin" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "天" font="45px" color="#5b9bd5" />) : (<ToneButton text = "天" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>sky</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Bui1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "bui" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "杯" font="45px" color="#5b9bd5" />) : (<ToneButton text = "杯" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>cup</p> 
                    </div>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Jat1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "jat" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "一" font="45px" color="#5b9bd5" />) : (<ToneButton text = "一" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>one</p> 
                    </div>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group' onClick={() => SoundPlay(Dei6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "dei" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "地" font="45px" color="#000000" />) : (<ToneButton text = "地" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>ground</p> 
                    </div>
                </div>
                <div className='lesson-menu-group' onClick={() => SoundPlay(Bui6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "bui" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "背" font="45px" color="#000000" />) : (<ToneButton text = "背" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>memorize</p> 
                    </div>
                </div>
                <div className='lesson-menu-group' onClick={() => SoundPlay(Luk6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "luk" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "六" font="45px" color="#000000" />) : (<ToneButton text = "六" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                        <p>six</p> 
                    </div>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Fei1Gei1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "fei" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "飛" font="45px" color="#5b9bd5" />) : (<ToneButton text = "飛" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gei" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "機" font="45px" color="#5b9bd5" />) : (<ToneButton text = "機" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>aeroplane</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Syu1Cim1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "syu" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "書" font="45px" color="#5b9bd5" />) : (<ToneButton text = "書" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "cim" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "籤" font="45px" color="#5b9bd5" />) : (<ToneButton text = "籤" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>bookmark</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Seoi6Dou6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "seoi" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "隧" font="45px" color="#000000" />) : (<ToneButton text = "隧" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "dou" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "道" font="45px" color="#000000" />) : (<ToneButton text = "道" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>tunnel</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Daai6Hok6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "daai" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "大" font="45px" color="#000000" />) : (<ToneButton text = "大" font="45px" color="#f8f7e2" fontColor="#000000"/>)
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
                    <p>university</p>
                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Faan1Hok6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "faan" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "返" font="45px" color="#5b9bd5" />) : (<ToneButton text = "返" font="45px" color="#f8f7e2" fontColor="#000000"/>)
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
                    <p>go to school</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Syu1Fuk6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "syu" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "舒" font="45px" color="#5b9bd5" />) : (<ToneButton text = "舒" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "fuk" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "服" font="45px" color="#000000" />) : (<ToneButton text = "服" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>comfortable</p>

                </div>
            </div>
            <ToneButton className="lesson-menu-tone-btn" color="#000000" text="Tone 6" margin={0} marginRight="20px"/>
            <ToneButton className="lesson-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={0}/>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Hok6Saang1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hok" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "學" font="45px" color="#000000" />) : (<ToneButton text = "學" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "saang" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "生" font="45px" color="#5b9bd5" />) : (<ToneButton text = "生" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>student</p>
                </div>
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Haau6Baa1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "haau" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "校" font="45px" color="#000000" />) : (<ToneButton text = "校" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "baa" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "巴" font="45px" color="#5b9bd5" />) : (<ToneButton text = "巴" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>school bus</p>
                </div>
            </div>
            <div className="lesson-menu-image-div">
                <h1 className='lesson-menu-text'>Sentences</h1>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Zyun1Sam1Di1Teng1Syu1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "zyun" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "專" font="45px" color="#5b9bd5" />) : (<ToneButton text = "專" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "sam" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "心" font="45px" color="#5b9bd5" />) : (<ToneButton text = "心" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "di" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "啲" font="45px" color="#5b9bd5" />) : (<ToneButton text = "啲" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "teng" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "聽" font="45px" color="#5b9bd5" />) : (<ToneButton text = "聽" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "syu" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "書" font="45px" color="#5b9bd5" />) : (<ToneButton text = "書" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Pay attention to the lesson.</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Sik6Faan6Ding6Sik6Min6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "sik" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "食" font="45px" color="#000000" />) : (<ToneButton text = "食" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "faan" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "飯" font="45px" color="#000000" />) : (<ToneButton text = "飯" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ding" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "定" font="45px" color="#000000" />) : (<ToneButton text = "定" font="45px" color="#f8f7e2" fontColor="#000000"/>)
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
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "min" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "麵" font="45px" color="#000000" />) : (<ToneButton text = "麵" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Rice or noodles?</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Gam1Jat6Hai6Saam1Hou6)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "gam" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "今" font="45px" color="#5b9bd5" />) : (<ToneButton text = "今" font="45px" color="#f8f7e2" fontColor="#000000"/>)
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
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hai" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "係" font="45px" color="#000000" />) : (<ToneButton text = "係" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone1} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "saam" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "三" font="45px" color="#5b9bd5" />) : (<ToneButton text = "三" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "hou" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "號" font="45px" color="#000000" />) : (<ToneButton text = "號" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Today is the 3rd.</p>
                </div>
            </div>
            <div className="lesson-menu-sentence-box">
                <div className='lesson-menu-group'  onClick={() => SoundPlay(Bin1Dou6Lok6Ce1)}>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "bin" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "邊" font="45px" color="#5b9bd5" />) : (<ToneButton text = "邊" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "dou" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "度" font="45px" color="#000000" />) : (<ToneButton text = "度" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "lok" : ""}{tone ? "6" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "落" font="45px" color="#000000" />) : (<ToneButton text = "落" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <div className="lesson-menu-word">
                        {level ? (<img src={Tone6} width="80" height="80" alt=""/>) : <></>}
                        <p>{jyutping ? "ce" : ""}{tone ? "1" : ""}</p>
                        {chinese_word ? 
                        tone_color ? (<ToneButton text = "車" font="45px" color="#5b9bd5" />) : (<ToneButton text = "車" font="45px" color="#f8f7e2" fontColor="#000000"/>)
                        : 
                        <></>}
                    </div>
                    <p>Where to get off?</p>
                </div>
            </div>
            <GoToButton text="Go To Quiz" onClick={() => {navigate("/quiz1");}}/>
        </div>
        <SettingsPopup trigger={trigger}/>
    </div>
  );
}

export default Lesson1;