import {React, useState} from 'react';

import './GoToButton.css';

function GoToButton(props) {

    return <button className="go-to-button" onClick={props.onClick}>{props.text}</button>
}

export default GoToButton;