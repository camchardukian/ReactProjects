/* eslint-disable no-unused-vars */
import React from 'react'
import skeleton from './skeleton.jpg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Thriller() {
    return (
        <div>
        <div className="btn-container">
        <h1>Perhaps it's better we don't talk about your fate... :( </h1>
        <img src={skeleton} alt="skeleton"></img>
        <Link className='link' to="/">
        <Button className="button1">Play again</Button>
        </Link>
        </div>
        </div>
    )
}

export default Thriller;