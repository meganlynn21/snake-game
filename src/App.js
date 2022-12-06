import Board from './Board/Board.jsx';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import {StartMenu} from './pages/StartMenu';

const App = () => (
  <div className="App">
    <>
      {/* <Link to="/">Start</Link>
      <Link to="/board">Snake</Link> */}
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="board" element={<Board />} />
      </Routes>
    </>
  </div>
);

export default App;
