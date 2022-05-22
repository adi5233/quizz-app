import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import QuesRating from "./QuesRating";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const navigate = useNavigate();
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
    if (!name) navigate("/");
  }, [currQues, questions, score, name, navigate]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      {questions ? (
        <>
          <h1>Welcome {name}</h1>
          <ProgressBar currQues={currQues + 1} totalQues={questions.length} />

          <div className="quizInfo">
            <div className="quizInfo-left">
              <span>{questions[currQues].category}</span>
              <QuesRating difficulty={questions[currQues].difficulty} />
            </div>

            <span>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
