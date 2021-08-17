import React from 'react';

function Square(props) {
    return (
        <button className="square">
            {props.id}
        </button>
    );
}

class Row extends React.Component {
    renderSquare(i) {
        return (
            <Square key={i}
                    id={++i}
            />
        );
    }

    generateRow() {
        const width = this.props.boardW;
        const rowNumber = this.props.rowNumber;
        const correction = width * rowNumber;
        const row = [];
        for (let i=0;i<width;i++) {
            row.push(this.renderSquare(i+correction))
        }
        return row;
    }

    render() {
        const row = this.generateRow();
        return (
            <div id={'row'+this.props.id} className='board-row'>
                {row}
            </div>
        );
    }
}
export default Row;