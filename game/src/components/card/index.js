import React from 'react';
import propTypes from 'prop-types';

import './styles.css'

export default function Card({ handleClick, id, type, flipped, height, width, disabled}) {
    return <div 
    className={`flip-container ${flipped ? 'flipped' : ''}`}
    style={{
        width, height
    }}
    onClick={() => (disabled ? null : handleClick(id))}
    >
        <div className="flipper">
            <img
            style={{
                height, width
            }}
            className={flipped ? 'front' : 'back'}
            src={flipped ? `/img/${type}.jpg` : '/img/back.jpeg'}
            />
        </div>
    </div>
}

Card.propTypes = {
    handleClick: propTypes.func.isRequired,
    id: propTypes.number.isRequired,
    flipped: propTypes.bool.isRequired,
    type: propTypes.string.isRequired,
    height: propTypes.number.isRequired,
    width: propTypes.number.isRequired,
    disabled: propTypes.bool.isRequired,
}
