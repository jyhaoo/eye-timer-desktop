import './Background.css';
import test from './img/default.jpg'

const Background = (props) => {
    var backgroundImage = test;
    // props.image, have a function to choose which background
    return (
        <div className='backgroundImage' style={{ backgroundImage: `url(${backgroundImage})` }}>
            {props.children}
        </div>
    )
}

export default Background