import { useState } from "react";
import Questions from "../../components/questions/Questions";
import "./quiz.css";

const Quiz = () => {
  return (
    <section className="quiz-container">
      <Questions qNumber={qNumber} />
    </section>
  );
};

export default Quiz;
