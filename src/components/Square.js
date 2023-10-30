import React from "react"

const Square = ({value, index, handleSqaureClick}) => {
  // const { value } = props
  const handleClick = () => {
    handleSqaureClick(index)
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
