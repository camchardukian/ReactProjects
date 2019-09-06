/* eslint-disable no-unused-vars */
import React from 'react';
import ghosts from './ghosts.jpg'
import Button from '@material-ui/core/button';
import { Link } from 'react-router-dom';
function Explore () {
    return (
        <div>
        <h1>You went exploring and wandered into a nearby room. A few moments later,
            you notice shadows of strange figures behind you.</h1>
        <img src={ghosts} alt="ghosts"></img>
        <h2>Do you use your phone to play Michael Jackson's song Thriller and start dancing?</h2>
        <div className="btn-container">
        <Link className="link" to="/thriller">
        <Button className="button1">Play Thriller</Button>
        </Link>
        <Link className="link" to="/death">
        <Button className="button2">Run away</Button>
        </Link>
        </div>
        </div>
    )
}

export default Explore; 