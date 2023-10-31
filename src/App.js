import React, { useState } from "react"

import Square from './components/Square'

import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [guess, setGuess] = useState(5)

  const [treasureLocation, setTeasureLocation] = useState(Math.floor(Math.random() * board.length))

  const [bombLocation, setBombLocation] = 
  useState(Math.floor(Math.random() * board.length))

  const handleSquareClick = (clickedSquareIndex) => {
    let updatedBoard = [... board]
    if(clickedSquareIndex === treasureLocation) {
      updatedBoard[clickedSquareIndex] = "💎"
      alert("Good Job! Vault Hunter, you found the Treasure")
      // setBoard(updatedBoard)
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💥"
      alert("The Detroyer OBLITERATED you! Respawn and try again")
      // setBoard(updatedBoard)
    } else {
      updatedBoard[clickedSquareIndex] = "👽"
      setGuess(guess - 1 )
    }
    setBoard(updatedBoard)
}
  const resetGame = () => {
    setBoard([
     "?",
     "?",
     "?",
     "?",
     "?",
     "?",
     "?",
     "?",
     "?",
    ])
    setTeasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
  }
  //  const resetGame = () => {
  //   window.location.reload()


  return (
    <>
    <h1>Vault Hunters</h1>
      <div className = "board">
      {board.map((value, index) => {
       console.log(value,index)
       return<Square 
        value={value} 
        index={index} 
        handleSquareClick={handleSquareClick} />      
  })}
    
      <button className="button" onClick={resetGame}>
      Try Again
      </button>
      </div>
      <p className="Guess-box">Guesses Remaining: {guess}</p>      
    </>
  )
}


export default App
