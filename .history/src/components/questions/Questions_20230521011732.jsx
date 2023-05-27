import { useEffect, useState } from "react";
import questions from "../../data";
import "./questions.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Questions = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState();
  const [qNumber, setQNumber] = useState(0);
  const [score, setScore] = useState(0);
  const q = questions[qNumber];
  const { uername } = useSelector((store) => store.userReducer);

  useEffect(() => {
    console.log(username);
  }, []);

  const handleNext = () => {
    if (isChecked === q.answer) {
      setScore((prev) => prev + 5);
    }
    if (qNumber < 4) {
      setQNumber((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <section className="questions-container">
      <h1 className="logo">
        <Link className="link" to={"/"}>
          Quiz App
        </Link>
      </h1>
      <section className="question-container">
        <section className="question">
          <h2 className="question-header">{q.question}</h2>
          <ul>
            {q.options.map((option, i) => (
              <li key={i}>
                <input
                  type="radio"
                  name="option"
                  id={`option${i}`}
                  className="radio-input"
                  onChange={() => setIsChecked(i)}
                />
                <label htmlFor={`option${i}`} className="question-label">
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="qusetions-btns">
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </section>
    </section>
  );
};

export default Questions;
