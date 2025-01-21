import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <Link to="./">Tyler McKell</Link>
      </div>
      <div className="right">
        <Link to="./my-js">JS</Link>
        <Link to="./my-react">REACT</Link>
        <Link to="./my-python">PYTHON</Link>
      </div>
    </div>
  );
}
