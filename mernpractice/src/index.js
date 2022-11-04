import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


/*
class Square extends React.Component{
    render(){
        return(
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}
*/



function Square(props){
    return(
        <button className ="square">
            {props.value}
        </button>
    )
}


class Board extends React.Component{
    renderSquare(i) {
        return <Square value={i} />;
    }

    render(){
        const status = 'Next player: X';

        return(

            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component{
    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

// ============================================

//this is where we render all our stuff to root
const root =
ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);