import React from 'react';

const formBlockStyle = {
    //backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 400,
    paddingLeft: 625,

}

const formItemsStyle = {
    paddingTop: 10,
    color: 'white',
    fontSize: 25,
    paddingBottom: 10,
}

class SettingsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.timeChangeHandler = this.timeChangeHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.handleTime(this.state.time);
        this.props.onCancel();
    }

    timeChangeHandler(event) {
        if (!isNaN(event.target.value)) {
            this.setState({ time: event.target.value })
        } else {
            console.log(event.target.value);
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div style={formBlockStyle}>
                    <div style={formItemsStyle}>
                        <label>Time</label>
                        <input type='text'
                            onChange={this.timeChangeHandler}
                        />
                    </div>
                    <button type='submit'>Confirm</button>
                    <button type='button' onClick={this.props.onCancel}>Cancel</button>
                </div>
            </form>
        )
    }
}

export default SettingsForm;

/*
                    <div style={formItemsStyle}>
                        <label>Background</label>
                        <input />
                    </div>
*/