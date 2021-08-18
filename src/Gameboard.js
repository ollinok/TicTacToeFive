import React from 'react';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(this.props.boardHeight * this.props.boardWidth).fill(null),
            turnX: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.turnX ? 'X':'O';
        this.setState({
            squares: squares,
            turnX: !this.state.turnX,
        });
    }

    renderSquare(i) {
        return (
            <Square key={i}
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)}
            />
        );
    }

    generateBoard() {
        const boardHeight = this.props.boardHeight;
        const boardWidth = this.props.boardWidth;
        const board = [];   
        for (let i=0;i<boardHeight;i++) {
            const row = [];
            for (let u=0;u<boardWidth;u++) {
                row.push(this.renderSquare(u+(boardWidth*i)))
            }
            const wrappedRow = <div key={i} className='board-row'>{row}</div>
            board.push(wrappedRow);
        }
        return board;
    }

    render() {
        const status = 'Next player: ' + (this.state.turnX ? 'X':'O');
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