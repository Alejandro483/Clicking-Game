import React, { useState, useEffect } from 'react';
import Board from './components/board';
import initializeDeck from './deck';

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setsolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() =>{
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setDisabled(true)
  setFlipped ([...flipped, id])
  }

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,

    ),
    )
  }
  return (
    <div>
     <h2 >Click on all the cards only once!
     </h2 >
    <Board
    dimension={dimension}
    cards={cards}
    flipped={flipped}
    handleClick={handleClick}
    disabled = {disabled}
    />
    </div>
  );
}


