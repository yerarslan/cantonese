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
import {Howl, Howler} from "howler";
 
var blob = "";

function Game() {

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

  return (
    <div className="Lesson">
        <div className="lesson-menu-top-bar">
            <div className="lesson-menu-top-bar-left" onClick={() => {navigate("/");}}>
                <IoChevronBack className="lesson-menu-top-bar-icon"size="50"/>
                <h2 className="lesson-menu-top-bar-icon-text">Home</h2>
            </div>
            <h1 className="lesson-menu-top-bar-text">Game</h1>
            <div className="lesson-menu-top-bar-right">
            </div>
        </div>
        <div className="lesson-menu-body">
            <iframe title="iframe-game" className='iframe' src="https://www.cuhk.edu.hk/eLearning/proj/cantonese-tone/"></iframe>
        </div>
    </div>
  );
}

export default Game;