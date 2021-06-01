import React from 'react';
import './Settings.css';
import SettingsForm from './SettingsForm';

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
        this.editHandler = this.editHandler.bind(this);
        this.stopEditingHandler = this.stopEditingHandler.bind(this);
    }

    editHandler() {
        this.setState({ isEditing: true })
    }

    stopEditingHandler() {
        this.setState({ isEditing: false })
    }

    render() {
        var isEditing = this.state.isEditing;
        return (
            <div>
                {!isEditing && (
                    <button onClick={this.editHandler}>Settings</button>
                )}
                {isEditing && (
                    <div>
                        <SettingsForm handleTime={this.props.handleTime} onCancel={this.stopEditingHandler} />
                    </div>
                )}
            </div>
        )
    }
}

export default Settings;

/*
                        <SettingsForm onSaveTime={this.props.handleTime} onCancel={this.stopEditingHandler} />
<button onClick={() => this.props.handleTime(21)} >HEREIAM</button>
*/