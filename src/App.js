import Board from './Board/Board.jsx';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {StartMenu} from './pages/StartMenu';
import GameOver from './pages/GameOver.js';
import Win from './pages/Win.js';

const App = () => (
  <div className="App">
    <>
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="board" element={<Board />} />
        <Route path="board/gameover" element={<GameOver />} />
        <Route path="board/win" element={<Win />} />
      </Routes>
    </>
  </div>
);

export default App;
