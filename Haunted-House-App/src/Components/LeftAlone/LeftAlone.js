/* eslint-disable no-unused-vars */
import React from 'react';
import monster from './monster.jpg';
import '../../Styles/global.css';
import Button from '@material-ui/core/button';
import { Link } from 'react-router-dom';

function LeftAlone() {
    return (
        <div>
        <h1>You keep your eyes closed, only opening them after your friends ran away and slammed the door shut.
            A disturbed monster seals your doom :( </h1>
            <img src={monster} alt="monster"/>
            <div className="btn-container">\
            <Link className="link" to="/">
            <Button className="button1">Play again</Button>
            </Link>
            </div>
            </div>
    )
}

export default LeftAlone;