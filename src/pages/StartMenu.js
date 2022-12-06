import React from 'react';
import useSound from 'use-sound';
import {useNavigate} from 'react-router-dom';
import snake from '../img/snake.png';
import start from '../audio/start.wav';

export function StartMenu() {
  const navigate = useNavigate();
  const [play] = useSound(start);
  // buffers automatically when created
  return (
    <div id="container">
      <div id="snakeImg">
        <img width="400" src={snake} alt="snake" />
      </div>
      <div id="btn">
        <button
          onClick={event => {
            navigate('board');
            play();
          }}
          class="massive ui inverted green button">
          START
        </button>
      </div>
    </div>
  );
}
