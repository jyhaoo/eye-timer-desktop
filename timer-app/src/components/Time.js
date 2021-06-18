import React, { useState, useEffect } from 'react';
import classes from './Time.module.css';

const Time = (props) => {

    const [time, setTime] = useState(props.time);

    useEffect(() => {
        if (props.time === '1hour') {
            setTime(3600);
        } else if (props.time === '45min') {
            setTime(2700);
        } else {
            //set up clock
        }
    })

    return (
        <p>{time}</p>
    )
}

export default Time;