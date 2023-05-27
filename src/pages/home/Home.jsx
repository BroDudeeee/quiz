import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { useDispatch } from "react-redux";
import { usernameAction } from "../../redux/userSlice";

const Home = () => {
  const [username, setUsername] = useState();
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!error) {
      setIsError(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsError(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isError]);

  const handleStart = (e) => {
    e.preventDefault();

    if (username) {
      dispatch(usernameAction(username));
      navigate("/quiz");
    } else {
      setIsError(true);
      setError("Enter your username to open the quiz");
    }
  };
  return (
    <section className="home-container">
      <Link to={"/"} className="link">
        <h1 className="logo">Quiz App</h1>
      </Link>
      <ol>
        <li>You will be asked 10 questions one after another</li>
        <li>10 points is awareded for the correct answer</li>
        <li>Each question has three options. you can choose only one option</li>
        <li>You can review and change answers before you submit</li>
        <li>The result will be declared at the end of the quiz</li>
      </ol>
      <form action="" className="username-form">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="username-input"
          ref={inputRef}
        />

        <button className="start-link" onClick={handleStart}>
          Start
        </button>
        <span className="error-msg">{isError && error}</span>
      </form>
    </section>
  );
};

export default Home;
