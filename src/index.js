// References:
// https://reactjs.org/tutorial/tutorial.html
import React from 'react';
import ReactDOM from 'react-dom';
import Gameboard from './Gameboard.js';
import './styles/index.css';

const boardHeight = 20;
const boardWidth = 20;
class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         squares: Array(boardHeight * boardWidth).fill(null),
    //     };
    // }

    // handleClick(i) {
    //     const squares = this.state.squares.slice();
    //     squares[i] = 'X';
    //     this.setState({squares: squares});
    // }

    render() {
        return (
            <div className="game">
              <div className="game-board">
                <Gameboard boardHeight={boardHeight}
                           boardWidth={boardWidth}
                           //squares=
                           //onClick={(i) => this.handleClick(i)}
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
  