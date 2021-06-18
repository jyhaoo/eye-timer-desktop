import React, { useState } from 'react';
import classes from './SettingsModal.module.css';

const SettingsModal = (props) => {
    const [enteredBackground, setBackground] = useState('default');
    const [enteredTimerType, setTimerType] = useState('');

    const backgroundChangeHandler = (event) => {
        setBackground(event.target.value);
    }

    const timeTypeHandler = (event) => {
        setTimerType(event.target.value);
    }

    const addSettings = (event) => {
        event.preventDefault();
        props.onAddSettings(enteredTimerType, enteredBackground);
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
                        <button className={classes.button} type='submit' value='1hour' onClick={timeTypeHandler}>1 Hour</button>
                        <button className={classes.button} type='submit' value='45min' onClick={timeTypeHandler}>45 minutes</button>
                        <button className={classes.button} type='submit' onClick={timeTypeHandler} value='clock'>Clock</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SettingsModal;