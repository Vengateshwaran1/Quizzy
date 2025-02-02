
const WelcomePage = ({ onStart }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center drop-shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-lg">Welcome to Quizzy 🧠</h1>
      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomePage;