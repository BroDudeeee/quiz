import { useState } from "react";
import Questions from "../../components/questions/Questions";
import "./quiz.css";

const Quiz = () => {
  const [qNumber, setQNumber] = useState(0);
  const handlePrev = () => {
    if (qNumber > 0) {
      setQNumber((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (qNumber < 4) {
      setQNumber((prev) => prev + 1);
    }
  };
  return (
    <section className="quiz-container">
      <Questions qNumber={qNumber} />
    </section>
  );
};

export default Quiz;
