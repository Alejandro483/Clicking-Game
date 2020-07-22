import React from 'react'
import propTypes from 'prop-types'

import Card from '../card'
import './styles.css'

export default function Board({ disabled, dimension, cards, flipped, handleClick }) {
    return (
    <div className='board'>
        {cards.map((card) => (
                <Card 
                key={card.id}
                id={card.id}
                type={card.type}
                with={dimension / 4.5}
                height={dimension / 4.5}
                // back={'/img/back.jpeg'} 
                // front={'/img/front.jpg'} 
                flipped={flipped.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled}
                />
            ))}
    </div>
    )
}
Board.propTypes = {
    disabled: propTypes.bool.isRequired,
    dimension: propTypes.number.isRequired,
    cards:  propTypes.arrayOf(propTypes.shape({})).isRequired,
    flipped: propTypes.arrayOf(propTypes.number).isRequired,
    handleClick: propTypes.func.isRequired, 
}