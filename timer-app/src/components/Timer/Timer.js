import React from 'react';

var style = {
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
            time: this.props.time
        }
    }

    render() {
        return (
            <div>
                <p style={style}>{this.state.time}</p>
            </div>
        )
    }
}

export default Timer;