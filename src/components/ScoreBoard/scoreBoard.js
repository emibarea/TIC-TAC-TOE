import "./scoreBoard.css";

const scoreBoard = ({ scoreX, scoreO }) => (
  <div className="score-board">
    <div>{scoreX}</div>
    <div>{scoreO}</div>
  </div>
);

export default scoreBoard;
