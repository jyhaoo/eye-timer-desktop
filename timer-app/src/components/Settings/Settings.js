import React from 'react';
import Popup from 'reactjs-popup';
import './Settings.css'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: 'hello world!'
        }
    }

    render() {
        return (
            <Popup trigger={<button className='button'> Open Modal </button>}
                modal
                nested
            >
                {close => (
                    <div className='modal'>
                        <button className='close' onClick={close}>
                            &times;
                        </button>
                        <div className='header'> Modal Title </div>

                    </div>
                )
                }
            </Popup>
        )
    }
}

export default Settings;