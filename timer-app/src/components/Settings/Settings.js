import React from 'react';
import './Settings.css'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }

    render() {
        var isEditing = this.state;
        return (
            <div>
                {!isEditing && (
                    <button>Settings</button>
                )}
                {isEditing && (
                    // open a new component settings form
                    <button>Is editing</button>
                )}
            </div>
        )
    }
}

export default Settings;