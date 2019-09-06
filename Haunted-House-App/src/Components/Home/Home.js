/* eslint-disable no-unused-vars */
import React from 'react';
import haunted_house from './haunted_house.jpg';
import '../../Styles/global.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
<h1> You and your friends discover a haunted house...</h1>
<img src={haunted_house} alt="haunted house"></img>
<h2>What will you do?</h2>
<div className="btn-container">
<Link className="link" to="/inside" exact strict>
<Button className="button1">Enter</Button>
</Link>
<Link className="link" to="/dragged-inside" exact strict>
<Button className="button2">Run away</Button>
</Link>
</div>
</div>
    )
}
export default Home