import React, { useState } from 'react';
import classes from './SettingsModal.module.css';

const SettingsModal = (props) => {
    const [enteredTime, setTimer] = useState('');
    const [enteredBackground, setBackground] = useState('');

    const timeChangeHandler = (event) => {
        setTimer(event.target.value);
    }

    const backgroundChangeHandler = (event) => {
        setBackground(event.target.value);
    }

    const addSettings = (event) => {
        event.preventDefault();
        console.log('Event: ' + enteredTime);
        console.log('Background: ' + enteredBackground);
    }

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <div className={classes.modal}>
                <div className={classes.settingsContainer}>
                    <p className={classes.settingsText}>Settings</p>
                </div>
                <form onSubmit={addSettings}>
                    <div>
                        <div className={classes.timeContainer}>
                            <label className={classes.timeText} htmlFor='time'>Time  </label>
                            <input className={classes.input} id='time' type='text' value={enteredTime} onChange={timeChangeHandler} />
                        </div>
                        <div className={classes.backgroundContainer}>
                            <label className={classes.backgroundText}>Backgrounds  </label>
                            <select className={classes.menu} id='background' onChange={backgroundChangeHandler}>
                                <option value='default'>Default</option>
                                <option value='cloudyMountain'>Cloudy Mountain</option>
                                <option value='cliffSea'>Cliff Sea</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button className={classes.button} type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SettingsModal;