import { Link } from "react-router-dom";
import "./result.css";

const Result = () => {
  const handleRestart = () => {
    console.log("Handle Restart");
  };
  return (
    <section className="result-container">
      <Link to={"/"} className="link">
        <h1 className="logo">Quiz App</h1>
      </Link>

      <section className="results-table">
        <div className="table-section">
          <h4>Username</h4>
          <h4>Ahmed Morsy</h4>
        </div>
        <div className="table-section">
          <h4>Total Quiz Points</h4>
          <h4>50</h4>
        </div>
        <div className="table-section">
          <h4>Total Questions</h4>
          <h4>05</h4>
        </div>

        <div className="table-section">
          <h4>Earned Points</h4>
          <h4>30</h4>
        </div>
        <div className="table-section">
          <h4>Quiz Result</h4>
          <h4>Passed</h4>
        </div>
      </section>
      <Link to={"/quiz"} className="start-link" onClick={handleRestart}>
        Restart
      </Link>
    </section>
  );
};

export default Result;
