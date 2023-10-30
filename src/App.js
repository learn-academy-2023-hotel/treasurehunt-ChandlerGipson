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

  const handleSqaureClick = (clickedSquareIndex) => {
    // alert(clickedSquareIndex)
    let updatedBoard = [... board]
    updatedBoard[clickedSquareIndex] = "🌲"
    setBoard(updatedBoard)
  }

  return (
    <>
      <h1>Pandoras Vault</h1>
      <div className = "board">
      {board.map((value, index) => {
       console.log(value,index)
       return <Square 
        value={value} 
        index={index} 
        handleSqaureClick={handleSqaureClick}
         />
      })}
     </div>
    </>
  )
}

export default App
