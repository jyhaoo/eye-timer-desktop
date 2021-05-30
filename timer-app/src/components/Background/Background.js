import React from 'react';
import './Background.css';
import test from './img/default.jpg'

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: test // change to props soon
        }
    }

    // props.image, have a function to choose which background
    render() {
        return (
            <div className='backgroundImage' style={{ backgroundImage: `url(${this.state.backgroundImage})` }}>
                {this.props.children}
            </div>
        )
    }
}

export default Background