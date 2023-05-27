import { useState } from "react";
import Questions from "../../components/questions/Questions";
import "./quiz.css";

const Quiz = () => {
  const [qNumber, setQNumber] = useState(0);

  return (
    <section className="quiz-container">
      <Questions qNumber={qNumber} />
    </section>
  );
};

export default Quiz;
