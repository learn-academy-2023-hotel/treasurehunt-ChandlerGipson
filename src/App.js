import React, { useState, useEffect } from "react";
import Square from "./components/Square";
import "./App.css";
import Destroyer from './Destroyer.jpg';
import Loot from './Loot.jpg';
import Guardian from './Guardian.jpg';
import Map from './Map.jpg';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill("?"));
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [guesses, setGuesses] = useState(5);
  const [gameOver, setGameOver] = useState(false);

  const handleSquareClick = (clickedSquareIndex) => {
    if (gameOver) {
      return;
    }

    let updatedBoard = [...board];

    if (clickedSquareIndex === treasureLocation) {
      updatedBoard[clickedSquareIndex] = <img src={Loot} alt="Loot" />;
      setGameOver(true);
      setTimeout(() => showRestartAlert("Good Job! Vault Hunter, you found the Treasure"), 400);
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = <img src={Destroyer} alt="💥" />;
      setTimeout(() => showRestartAlert("The Destroyer OBLITERATED you! Respawn and try again"), 400);
      setGameOver(true);
    } else {
      updatedBoard[clickedSquareIndex] = <img src={Guardian} alt="👽" />;
    }

    setBoard(updatedBoard);
    setGuesses((prevGuesses) => prevGuesses - 1);
  };

  const showRestartAlert = (message) => {
    const restartGame = window.confirm(`${message}\nDo you want to respawn?`);

    if (restartGame) {
      handlePlayAgain();
    }
  };

  useEffect(() => {
    if (guesses === 0) {
      setGameOver(true);
      setTimeout(() => showRestartAlert("YOU'RE EXHAUSTED, Vault Hunter! The Destroyer has atomized you!"), 400);
    }
  }, [guesses]);

  const handlePlayAgain = () => {
    setBoard(Array(9).fill("?"));
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setGuesses(5);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <div className="game">
        <div className="board">
          {board.map((value, index) => (
            <Square
              key={index}
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          ))}
        </div>
        <div className="respawn-section">
          <div className="button-container">
            <button className="playButton" onClick={handlePlayAgain}>
              Respawn?
            </button>
            <p className="remGuesses">Remaining Attacks: {guesses}</p>
          </div>
        </div>
      </div>
      <div className="instructions">
        <div className="boss-fight">
          <h1>Pandoras Vault</h1>
          <div className="game-rules">
          Vault Hunter! Armed with your trusty map, you must navigate the treacherous terrain of Pandora to locate the elusive Vault. However, beware of the mighty Guardians who stand between you and your goal. But heed this warning: the Destroyer, a colossal force of chaos, looms on the horizon. Choosing the wrong location may lead to a direct confrontation with this formidable foe, and your quest could come to a premature end.

            <br /><br />

            <strong>Rules:</strong>
            <ul>
              <li>You have 5 turns to search for The Vault.</li>
              <li>Beware of the Guardians protecting The Vault.</li>
              <li>Find the Vault before the Destroyer arrives!</li>
            </ul>

            {/* Good luck, and may the loot be ever in your favor! */}
          </div>
        </div>
      </div>
      <div className="made-by">
        Made by Chandler Gipson 2023
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/chandlergipson/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/ChandlerGipson" target="_blank" rel="noopener noreferrer">
            <img src="github-icon.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
















