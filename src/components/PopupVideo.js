import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Popup.css'

function PopupVideo(props) {
    let navigate = useNavigate();
  return (props.trigger ?
  <div className='popup'>
      <div className='popup-inner'>
        <h3 className='popup-active' onClick={() => {navigate("/video1");}}>買衫 Buy clothing</h3>
        <h3 className='popup-active' onClick={() => {navigate("/video2");}}>食嘢 Eating</h3>
        <h3 className='popup-active' onClick={() => {navigate("/video3");}}>識人 New friend</h3>
        <h3 className='popup-active' onClick={() => {navigate("/video4");}}>住邊 Living</h3>
        <h3 className='popup-active' onClick={() => {navigate("/video5");}}>搭車 Transportation</h3>
      </div>
  </div> :
  <></>);
}

export default PopupVideo;
