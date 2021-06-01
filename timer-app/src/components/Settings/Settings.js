import React from 'react';
import './Settings.css';
import SettingsForm from './SettingsForm';

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: true
        }
    }

    render() {
        var isEditing = this.state.isEditing;
        return (
            <div>
                {!isEditing && (
                    <button>Settings</button>
                )}
                {isEditing && (
                    // open a new component settings form
                    <div>
                        <SettingsForm />
                    </div>
                )}
            </div>
        )
    }
}

export default Settings;