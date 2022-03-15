import {React, useState} from 'react';

function ToneButton(props) {
    let style = {
        backgroundColor: props.color,
        width: '70px',
        height: '70px',
        margin: props.margin,
        fontSize: '25px',
        border: '0px',
        color: 'white',
    }
    if(props.font) {
        style.fontSize = props.font;
    }
    if(props.fontColor) {
        style.color = props.fontColor;
    }
    if(props.marginRight) {
        style.marginRight = props.marginRight;
    }
    if(props.marginLeft) {
        style.marginLeft = props.marginLeft;
    }
    return <button className="tone-button" style={style} onClick={props.func}>{props.text}</button>;
}

export default ToneButton;