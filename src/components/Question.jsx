import { useState } from "react";

const Question = ({ question, questionNumber, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedOption(option.id);
    onAnswer(option.is_correct);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-blue-600">
        Question {questionNumber}:
      </h2>
      <div className="mt-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`block w-full bg-gray-200 hover:bg-gray-300 text-left p-2 rounded mb-2 ${
              selectedOption === option.id ? "bg-green-200" : ""
            }`}
            onClick={() => handleAnswerClick(option)}
          >
            {option.description}
            {selectedOption === option.id && (
              <span className="ml-2 text-green-600">&#10003;</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
