import React from 'react';
import {useNavigate} from 'react-router-dom';
import gameOverImg from '../img/gameOverImg.jpg';

export function GameOver() {
  const navigate = useNavigate();
  // buffers automatically when created
  return (
    <>
      <div id="game-over">
        <img width="400" src={gameOverImg} alt="gameover" />
      </div>
      <div id="container">
        <div id="btn">
          <button
            onClick={event => {
              navigate('/');
            }}
            class="massive ui inverted red button">
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default GameOver;
