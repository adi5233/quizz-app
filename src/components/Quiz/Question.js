import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";
import ErrorMessage from "../utils/ErrorMessage";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleClassName = (currentOption) => {
    if (selected === currentOption && selected === correct) return "correct";
    else if (selected === currentOption && selected !== correct) return "wrong";
    else if (currentOption === correct) return "correct";
  };

  const handleSelect = (selectedOption) => {
    setSelected(selectedOption);
    if (selectedOption === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > questions.length - 2) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>
        Question {currQues + 1} of {questions.length}
      </h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className={`options ${!selected && 'hoverOption'}`}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((option) => (
              <button
                className={`singleOption  ${
                  selected && handleClassName(option)
                }`}
                key={option}
                onClick={() => handleSelect(option)}
                disabled={selected}
              >
                {option}
              </button>
            ))}
        </div>
        {selected &&
          (selected === correct ? (
            <h3 style={{ color: "green", marginBottom: "25px" }}>
              Correct Answer
            </h3>
          ) : (
            <h3 style={{ color: "red", marginBottom: "25px" }}>Wrong Answer</h3>
          ))}
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
            disabled={!selected}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
