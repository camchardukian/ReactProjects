/* eslint-disable no-unused-vars */
import React from 'react';
import door_handle from './door_handle.jpg';
import Button from '@material-ui/core/button';
import '../../Styles/global.css';
import { Link } from 'react-router-dom';
function DoorSlam() {
    return (
        <div>
        <h1> Unfortunately, a mysterious force slammed
            the door shut and locked you inside the house.</h1>
            <img src={door_handle} alt="door handle"></img>
            <div className="btn-container">
            <Link className="link" to="continue">
            <Button className="button1">Continue to try to open the door</Button>
            </Link>
            <Link className="link" to="explore">
            <Button className="button2">Explore the house</Button>
            </Link>
            </div>
            </div>

    )
}

export default DoorSlam