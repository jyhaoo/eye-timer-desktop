import React from 'react';
import defaultImage from '../assets/default.jpg';
import cloudyMountain from '../assets/cloudyMountain.jpg';
import cliffSea from '../assets/cliffSea.jpg';

const Background = (props) => {

    const convert_to_image = (image) => {
        switch (image) {
            case 'defaultImage':
                return defaultImage;
            case 'cloudyMountain':
                return cloudyMountain;
            case 'cliffSea':
                return cliffSea;
            default:
                return defaultImage;
        }
    }

    return (
        <div style={{
            backgroundImage: `url(${convert_to_image(props.image)})`,
            position: 'fixed',
            minWidth: '100%',
            minHeight: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            right: 0,
            top: 0,
        }}>
            {props.children}
        </div>
    )
}

export default Background;