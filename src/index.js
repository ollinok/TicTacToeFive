// References:
// https://reactjs.org/tutorial/tutorial.html
import React from 'react';
import ReactDOM from 'react-dom';
import Gameboard from './Gameboard.js';
import winCondition from './Logic/WinCondition.js'
import './styles/index.css';

const boardHeight = 20;
const boardWidth = 20;
class Game extends React.Component {
    render() {
        const winLines = winCondition(boardHeight, boardWidth);
        return (
            <div className="game">
              <div className="game-board">
                <Gameboard boardHeight={boardHeight}
                           boardWidth={boardWidth}
                           winLines={winLines}
                />
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
  