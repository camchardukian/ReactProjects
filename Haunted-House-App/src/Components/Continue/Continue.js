/* eslint-disable no-unused-vars */
import React from "react"
import monster from '../LeftAlone/monster.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../../Styles/global.css';
function Continue() {
    return (
    <div>
        <h1> You continue to try to open the door, but you can't open it. A monster sneaks up on
        you from behind and seals your doom :(
        </h1>
        <img src={monster} alt="monster"/>
        <Link className="link" to="/">
        <div className="btn-container">
        <Button className="button1">Play again</Button>
        </div>
        </Link>
    </div>)
}

export default Continue