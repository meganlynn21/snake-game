import React from 'react';
import { useState } from 'react';

import './Board.css'

const BOARD_SIZE = 10;

// Creating the Board
const Board = () => {
    const [board, setBoard] = useState(
        new Array(BOARD_SIZE).fill(0).map(row => new Array(BOARD_SIZE).fill(0)),
    );
// Creating the Grid
    return (
        <div className="board">
            {board.map((row, rowIdx) => (
                <div key={rowIdx} className="row">{
                    row.map((cell, cellIdx) => (
                        <div key={cellIdx} className={`cell ${true ? 'snake-cell' : ''}`}></div>
                    ))
                }</div>
            ))}
        </div>
    );
};

export default Board;