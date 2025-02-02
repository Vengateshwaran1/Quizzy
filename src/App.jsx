import React, { useState } from 'react';
import Quiz from './components/Quiz';
import WelcomePage from './WelcomePage.jsx';

const App = () => {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        {started ? (
          <>
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
              Quizzy 🧠
            </h1>
            <Quiz />
          </>
        ) : (
          <WelcomePage onStart={handleStart} />
        )}
      </div>
      <footer className="mt-6 text-gray-800 text-sm">
        Made with ❤️ by Vengateshwaran K
      </footer>
    </div>
  );
};

export default App;
