import React from "react"

const Square = ({value, index, handleSquareClick}) => {
  // const { value } = props
  const handleClick = () => {
    handleSquareClick(index)
  }
  return (
    <>
      <div className="square" onClick={handleClick}>
        {value}
      </div>
    </>
  )
}
export default Square
