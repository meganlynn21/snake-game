import React from 'react';
import {useNavigate} from 'react-router-dom';
import youWinImg from '../img/youwinImg.jpg';

export function Win() {
  const navigate = useNavigate();
  // buffers automatically when created
  return (
    <>
      <div id="youwin">
        <img width="400" src={youWinImg} alt="gameover" />
      </div>
      <div id="container">
        <div id="btn">
          <button
            onClick={event => {
              navigate('/');
            }}
            class="massive ui inverted green button">
            Play Again
          </button>
        </div>
      </div>
    </>
  );
}

export default Win;
