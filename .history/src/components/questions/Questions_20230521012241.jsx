import { useEffect, useState } from "react";
import questions from "../../data";
import "./questions.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increaseScore } from "../../redux/userSlice";

const Questions = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState();
  const [qNumber, setQNumber] = useState(0);
  const q = questions[qNumber];
  const { score } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (isChecked === q.answer) {
      dispatch(increaseScore(5));
    }
    if (qNumber < 5) {
      setQNumber((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  useEffect(() => {
    console.log(score);
  }, [score]);
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
