import React from 'react';
import ReactDOM from 'react-dom';
import Gameboard from './Gameboard.js';
import './styles/index.css';
  
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Gameboard />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
  