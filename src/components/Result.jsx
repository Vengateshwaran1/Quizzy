import { Rotate3D } from "lucide-react";

const Result = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;
  let message = "Good effort! Keep practicing. 👍";

  if (percentage === 100) message = "Perfect score! 🎉 Amazing job!";
  else if (percentage >= 75) message = "Great work! 🔥";
  else if (percentage < 50) message = "Don't give up! Try again. 💪";

  return (
    <div className="text-center p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold text-blue-600">Quiz Completed! 🎯</h2>
      <p className="mt-4 text-lg font-semibold">
        Your Score: <span className="text-blue-500">{score}</span> / {totalQuestions}
      </p>
      <p className="mt-2 text-gray-700">{message}</p>

      <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center"
        onClick={onRestart}
      >
        Restart Quiz <Rotate3D className="ml-2" />
      </button>
    </div>
  );
};

export default Result;
