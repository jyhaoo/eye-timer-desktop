import React, { useState, useEffect } from 'react';
import classes from './Time.module.css';

const Clock = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        var time = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(time);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            <p className={classes.clockText}>{date.toLocaleTimeString()}</p>
        </div>
    )
}

export default Clock;