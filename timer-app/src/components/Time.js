import React, { useState, useEffect } from 'react';
import classes from './Time.module.css';

const Time = (props) => {

    const [time, setTime] = useState(props.time);
    const [breakTime, setBreaktime] = useState(true);

    useEffect(() => {
        var seconds = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(seconds);
        };
    });

    const tick = () => {
        if (time > 0) {
            setTime(time - 1);
        } else if (breakTime) {
            setBreaktime(false)
            setTime(600)
        } else {
            setTime('Finished')
        }
    }

    const secondsToTime = (s) => {
        if (s === 'Finished') {
            return s;
        }
        let minutes = Math.floor(s / 60);
        let seconds = s - (minutes * 60);
        return ((minutes > 9) ? '' : '0') + minutes + ' : ' + ((seconds > 9) ? '' : '0') + seconds;
    }

    return (
        <p className={(breakTime) ? classes.timeText : classes.breakText}>{secondsToTime(time)}</p>
    )
}

export default Time;