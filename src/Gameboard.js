import React from 'react';
import Row from './Row.js';

class Gameboard extends React.Component {
    generateBoard() {
        const boardHeight = 20;
        const boardWidth = 20;
        const board = [];   
        for (let i=0;i<boardHeight;i++) {
            board.push(
                <Row key={i+1}
                     boardW={boardWidth}
                     rowNumber={i}
                />
            );
        }
        return board;
    }

    render() {
        const status = 'Next player: X';
        const board = this.generateBoard();

        return (
        <div>
            <div className="status">{status}</div>
            {board}
        </div>
        );
    }
}
export default Gameboard;