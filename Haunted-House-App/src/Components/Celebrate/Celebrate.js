/* eslint-disable no-unused-vars */
import React from 'react';
import Pizza from './pizza.jpg';
function Celebrate() {
    return (
        <div>
        <h1>Congratulations, enjoy your pizza party and
            have a laugh with your friends about the trouble you got into tonight!</h1>
        <img src={Pizza} alt="pizza"></img>
        <h2>This application was developed by
            <span class="cursive"> <a href="http://cameronchardukian.com/">Cameron Chardukian</a></span></h2>
            <br></br>
        <h2>The purpose of developing this app was to become more comfortable with <a href="https://reacttraining.com/react-router/">react-router.</a></h2>
        </div>
    )
}

export default Celebrate;