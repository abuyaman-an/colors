import "./Square.css";

function Square({ color, onClick }) {
  return (
    <div
      className="square"
      style={{
        background: color,
      }}
      onClick={onClick}
    />
  );
}

export default Square;
