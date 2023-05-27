import { useEffect, useState } from "react";
import questions from "../../data";
import "./questions.css";
import { Link } from "react-router-dom";

const Questions = ({ qNumber }) => {
  const [isChecked, setIsChecked] = useState();
  let score = 0;
  const q = questions[qNumber];

  useEffect(() => {}, [isChecked]);
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
                  onChange={setIsChecked(i)}
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
        <button className="prev-btn" onClick={handlePrev}>
          Prev
        </button>
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </section>
    </section>
  );
};

export default Questions;
