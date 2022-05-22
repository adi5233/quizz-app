import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import { QUESTIONS } from "./Questions";
import NotFound from "./components/Not Found/NotFound";

function App() {
  const [questions, setQuestions] = useState(QUESTIONS);
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home name={name} setName={setName} />}
        />
        <Route
          exact
          path="/quiz"
          element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route
          exact
          path="/result"
          element={<Result name={name} score={score} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
