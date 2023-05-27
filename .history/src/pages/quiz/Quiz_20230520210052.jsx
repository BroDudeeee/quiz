import { useSelector } from "react-redux";
import Questions from "../../components/questions/Questions";
import "./quiz.css";
import { useEffect } from "react";

const Quiz = () => {
  const store = useSelector((store) => store);

  useEffect(() => {
    console.log(store);
  }, []);

  const handlePrev = () => {
    console.log("Prev button clicked");
  };

  const handleNext = () => {
    console.log("Next button clicked");
  };
  return (
    <section className="quiz-container">
      <Questions />
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

export default Quiz;
