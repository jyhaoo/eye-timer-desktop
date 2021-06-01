import React from 'react';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
    color: 'white',
    fontSize: 125,
    //backgroundColor: 'black',
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
            finishMessage: this.props.finishMessage
        }
        this.convert_time = this.convert_time.bind(this)
        this.count_down = this.count_down.bind(this);
    }

    componentDidMount() {
        console.log('Component did mount in timer');
        this.interval = setInterval(this.count_down, 1000)
    }

    count_down() {
        if (this.state.time > 0) {
            this.setState({ time: this.state.time - 1 });
            console.log(this.state.time);
        }
    }

    convert_time(seconds) {
        if (seconds === 0) {
            return this.state.finishMessage;
        }
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds - (hours * 3600)) / 60);
        let remSeconds = seconds - ((minutes * 60) + (hours * 3600));
        return (((hours < 10) ? '0' : '') + hours +
            ':' + ((minutes < 10) ? '0' : '') + minutes +
            ':' + ((remSeconds < 10) ? '0' : '') + remSeconds);
    }

    render() {
        let displayTime = this.convert_time(this.state.time);
        return (
            <div>
                <p style={style}>{displayTime}</p>
            </div>
        )
    }
}

export default Timer;