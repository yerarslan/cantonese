import './Introduction.css';
import { React } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import ToneButton from '../components/ToneButton';
import ToneBg from '../assets/tone_bg.png';
import Bird from '../assets/bird.png';
import Dragonfly from '../assets/dragonfly.png';
import Cat from '../assets/cat.png';
import Gopher from '../assets/gopher.png';
import {Howl, Howler} from "howler";

import Audio1 from '../assets/audio/audio-intro/tone1.mp3';
import Audio2 from '../assets/audio/audio-intro/tone2.mp3';
import Audio3 from '../assets/audio/audio-intro/tone3.mp3';
import Audio4 from '../assets/audio/audio-intro/tone4.mp3';
import Audio5 from '../assets/audio/audio-intro/tone5.mp3';
import Audio6 from '../assets/audio/audio-intro/tone6.mp3';


function Introduction() {
    let navigate = useNavigate();
    let margin_tone_button = '35px';

    const SoundPlay = (src, id, index) => {
        var element = document.getElementById(id);
        if(id === "introduction-menu-bird") {
            element.classList.add('introduction-menu-bird-final');
            setTimeout(() => element.classList.remove('introduction-menu-bird-final'), 700);
        }
        else if(id === "introduction-menu-dragonfly") {
            element.classList.add('introduction-menu-dragonfly-final');
            setTimeout(() => element.classList.remove('introduction-menu-dragonfly-final'), 700);
        }    
        else if(id === "introduction-menu-cat") {
            if(index === 1) {
                element.classList.add('introduction-menu-cat-final1');
                setTimeout(() => element.classList.remove('introduction-menu-cat-final1'), 700);
            }
            else if(index === 2) {
                element.classList.add('introduction-menu-cat-final2');
                setTimeout(() => element.classList.remove('introduction-menu-cat-final2'), 700);
            }
            else if(index === 3) {
                element.classList.add('introduction-menu-cat-final3');
                setTimeout(() => element.classList.remove('introduction-menu-cat-final3'), 700);
            }
        }
        else if(id === "introduction-menu-gopher") {
            element.classList.add('introduction-menu-gopher-final');
            setTimeout(() => element.classList.remove('introduction-menu-gopher-final'), 700);
        }
        const sound = new Howl({
            src
        })
        sound.play();
    }

    Howler.volume(1.0)

  return (
    <div className="Introduction">
        <div className="introduction-menu-top-bar">
            <div className="introduction-menu-top-bar-left" onClick={() => {navigate("/");}}>
                <IoChevronBack className="introduction-menu-top-bar-icon"size="50"/>
                <h2 className="introduction-menu-top-bar-icon-text">Home</h2>
            </div>
            <h1 className="introduction-menu-top-bar-text">Introduction</h1>
            <div className="introduction-menu-top-bar-right"></div>
        </div>
        <div className="introduction-menu-body">
            <p>
                Tones are different pitches of the voice that distinguish words. Cantonese has six tones, which are characterized by pitch levels (high, mid and low) and directions of pitch movement (rising and level).
            </p>
            <div className="introduction-menu-tone-row">
                <ToneButton className="introduction-menu-tone-btn" color="#5b9bd5" text="Tone 1" margin={margin_tone_button} func={() => SoundPlay(Audio1, "introduction-menu-bird")}/>
                <ToneButton className="introduction-menu-tone-btn" color="#dc404f" text="Tone 2" margin={margin_tone_button} func={() => SoundPlay(Audio2, "introduction-menu-cat", 1)}/>
                <ToneButton className="introduction-menu-tone-btn" color="#a9d18e" text="Tone 3" margin={margin_tone_button} func={() => SoundPlay(Audio3, "introduction-menu-dragonfly")}/>
            </div>
            <div className="introduction-menu-tone-row">
                <ToneButton className="introduction-menu-tone-btn" color="#843c0c" text="Tone 4" margin={margin_tone_button} func={() => SoundPlay(Audio4, "introduction-menu-gopher")}/>
                <ToneButton className="introduction-menu-tone-btn" color="#7030a0" text="Tone 5" margin={margin_tone_button} func={() => SoundPlay(Audio5, "introduction-menu-cat", 2)}/>
                <ToneButton className="introduction-menu-tone-btn" color="#000000" text="Tone 6" margin={margin_tone_button} func={() => SoundPlay(Audio6, "introduction-menu-cat", 3)}/>
            </div>
            <p>
                Click on the abobe tones to see animations
            </p>
            <div className="introduction-menu-images">
                <img id="introduction-menu-bird" className="introduction-menu-bird" src={Bird} alt="Bird"/>
                <img id="introduction-menu-dragonfly" className="introduction-menu-dragonfly" src={Dragonfly} alt="Dragonfly"/>
                <img id="introduction-menu-cat" className="introduction-menu-cat" src={Cat} alt="Cat"/>
                <img id="introduction-menu-gopher" className="introduction-menu-gopher" src={Gopher} alt="Gopher"/>
            </div>
        </div>
    </div>
  );
}

export default Introduction;