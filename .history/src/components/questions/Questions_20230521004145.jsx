import questions from "../../data";
import "./questions.css";
import { Link } from "react-router-dom";

const Questions = ({ qNumber }) => {
  const q = questions[qNumber];
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
                />
                <label htmlFor={`option${i}`} className="question-label">
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Questions;
