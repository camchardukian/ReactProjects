/* eslint-disable no-unused-vars */
import React from "react";
import chandelier from './chandelier.jpg';
import '../../Styles/global.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
function Inside() {
    return (
        <div>
        <h1> You are inside the eerily lit home.</h1>
        <img src={chandelier} alt="chandelier"></img>
        <h2>You now hear faint whispers coming from a nearby room...</h2>
        <div className="btn-container">
        <Link className="link" to="/escape-the-house" exact strict>
        <Button className="button1">Escape the house!</Button>
        </Link>
        <Link className="link" to="/explore" exact strict>
        <Button className="button2">Explore!</Button>
        </Link>
        </div>
        </div>)
}
export default Inside
