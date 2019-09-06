/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../Styles/global.css';

function Death() {
    return(
        <div>
        <h1>You and your friends were caught and faced a horrible demise...
            <br></br>
            Just kidding! You all ran away and managed to escape through the bedroom window.  </h1>
          <div className="btn-container">
            <Link className="link" to="/celebrate">
                <Button className="button1"> Celebrate </Button>
            </Link>
            <Link className="link" to="/inside">
                <Button className="button2">Go back inside</Button>
            </Link>
           </div>
        </div>
    )
}

export default Death;