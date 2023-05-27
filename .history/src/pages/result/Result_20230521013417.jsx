import { Link } from "react-router-dom";
import "./result.css";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../../redux/userSlice";

const Result = () => {
  const { username, score } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(restart());
  };
  return (
    <section className="result-container">
      <Link to={"/"} className="link">
        <h1 className="logo">Quiz App</h1>
      </Link>

      <section className="results-table">
        <div className="table-section">
          <h4>Username</h4>
          <h4>{username?.toUpperCase()}</h4>
        </div>
        <div className="table-section">
          <h4>Total Quiz Points</h4>
          <h4>50</h4>
        </div>
        <div className="table-section">
          <h4>Total Questions</h4>
          <h4>10</h4>
        </div>

        <div className="table-section">
          <h4>Earned Points</h4>
          <h4>{score}</h4>
        </div>
        <div className="table-section">
          <h4>Quiz Result</h4>
          <h4>{score >= 25 ? "Passed" : "Failed"}</h4>
        </div>
      </section>
      <Link to={"/quiz"} className="start-link" onClick={handleRestart}>
        Restart
      </Link>
    </section>
  );
};

export default Result;
