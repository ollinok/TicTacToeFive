// References:
// https://reactjs.org/tutorial/tutorial.html
import React from 'react';
import ReactDOM from 'react-dom';
import Gameboard from './Gameboard.js';
import './styles/index.css';

const boardHeight = 20;
const boardWidth = 20;
class Game extends React.Component {
    winCondition() {
        const he = boardHeight;
        const wi = boardWidth;
        const winLines = [];
        // horizontal
        for (let i=0;i<he;i++) {
            for (let u=0;u<(wi-4);u++) {
                winLines.push(
                    [u+(wi*i),
                     u+(wi*i)+1,
                     u+(wi*i)+2,
                     u+(wi*i)+3,
                     u+(wi*i)+4
                    ]);
            }
        }
        // vertical
        for (let i=0;i<wi;i++) {
            for (let u=0;u<(he-4);u++) {
                winLines.push(
                    [i+(wi*u),
                     i+(wi*u)+wi,
                     i+(wi*u)+wi*2,
                     i+(wi*u)+wi*3,
                     i+(wi*u)+wi*4
                    ]);
            }
        }
        // diagonal
        for (let i=0;i<(he-4);i++) {
            for (let u=0;u<(wi-4);u++) {
                winLines.push(
                    [u+(wi*i),
                     u+(wi*i)+1+wi,
                     u+(wi*i)+2+wi*2,
                     u+(wi*i)+3+wi*3,
                     u+(wi*i)+4+wi*4
                    ]);
            }
            for (let u=0;u<(wi-4);u++) {
                winLines.push(
                    [u+4+(wi*i),
                     u+3+(wi*i)+wi,
                     u+2+(wi*i)+wi*2,
                     u+1+(wi*i)+wi*3,
                     u+(wi*i)+wi*4,
                    ]);
            }
        }
        return winLines;
    }

    render() {
        const winLines = this.winCondition();
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
  