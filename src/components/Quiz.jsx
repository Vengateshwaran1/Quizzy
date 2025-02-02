import { useEffect, useState } from "react";
import { fetchData } from "../api/Api.jsx";
import { Loader } from "lucide-react";
import Question from "./Question.jsx";
import Result from "./Result.jsx";

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuizData = async () => {
      try {
        const data = await fetchData();
        if (!data || !data.questions) {
          throw new Error("Invalid quiz data received.");
        }
        setQuizData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getQuizData();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
  
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1); 
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCompleted(false);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-10 h-10 text-blue-500" />
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 font-semibold p-4">
        {error}
      </div>
    );

  return (
    <div className="max-w-lg mx-auto p-4">
      {completed ? (
        <Result score={score} totalQuestions={quizData.questions.length} onRestart={handleRestart} />
      ) : (
        <Question
          question={quizData.questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
