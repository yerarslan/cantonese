import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Popup.css'

function Popup(props) {
    let navigate = useNavigate();
  return (props.trigger ?
  <div className='popup'>
      <div className='popup-inner'>
        {props.progress[0] ? <h3 className='popup-active' onClick={() => {navigate("/lesson1");}}>Lesson I: Tone 1 and Tone 6</h3> : <h3 className='popup-inactive'>Lesson I: Tone 1 and Tone 6</h3>}
        {props.progress[1] ? <h3 className='popup-active' onClick={() => {navigate("/lesson2");}}>Lesson II: Tone 2</h3> : <h3 className='popup-inactive'>Lesson II: Tone 2</h3>}
        {props.progress[2] ? <h3 className='popup-active' onClick={() => {navigate("/lesson3");}}>Lesson III: Tone 3</h3> : <h3 className='popup-inactive'>Lesson III: Tone 3</h3>}
        {props.progress[3] ? <h3 className='popup-active' onClick={() => {navigate("/lesson4");}}>Lesson IV: Tone 5</h3> : <h3 className='popup-inactive'>Lesson IV: Tone 5</h3>}
        {props.progress[4] ? <h3 className='popup-active' onClick={() => {navigate("/lesson5");}}>Lesson V: Tone 4</h3> : <h3 className='popup-inactive'>Lesson V: Tone 4</h3>}
        {props.progress[5] ? <h3 className='popup-active' onClick={() => {navigate("/notes");}}>Supplementary Notes</h3> : <h3 className='popup-inactive'>Supplementary Notes</h3>}
      </div>
  </div> :
  <></>);
}

export default Popup;
