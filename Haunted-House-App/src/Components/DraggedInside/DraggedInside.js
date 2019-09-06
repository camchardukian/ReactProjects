/* eslint-disable no-unused-vars */
import React from 'react'
import '../../Styles/global.css';
import Button from '@material-ui/core/button';
import { Link } from 'react-router-dom';

function DraggedInside () {
    return (
        <div>
        <h1> You tried to run away, but your friends dragged you inside.</h1>
        <div className="btn-container">
        <Link className="link" to="/inside">
        <Button className="button1">Open your eyes.</Button>
        </Link>
        <Link className="link" to="left-alone">
        <Button className="button2">Keep your eyes closed.</Button>
        </Link>
        </div>
        </div>
    )
}

export default DraggedInside