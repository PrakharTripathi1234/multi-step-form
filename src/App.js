import React, { useState } from 'react';

const App = () => {
  const [userType, setUserType] = useState('');
  const [mathComfortLevel, setMathComfortLevel] = useState('');

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleMathComfortLevelChange = (level) => {
    setMathComfortLevel(level);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!userType && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Which describes you best?</h1>
          <p className="text-gray-600 mb-6">This will help us personalize your experience.</p>
          <div className="flex flex-col space-y-2">
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleUserTypeChange('student')}
            >
              Student or soon to be enrolled
            </button>
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleUserTypeChange('professional')}
            >
              Professional pursuing a career
            </button>
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleUserTypeChange('parent')}
            >
              Parent of a school-age child
            </button>
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleUserTypeChange('lifelong_learner')}
            >
              Lifelong learner
            </button>
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleUserTypeChange('teacher')}
            >
              Teacher
            </button>
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleUserTypeChange('other')}
            >
              Other
            </button>
          </div>
        </div>
      )}

      {userType && !mathComfortLevel && (
        <div>
          <h1 className="text-2xl font-bold mb-4">What is your math comfort level?</h1>
          <p className="text-gray-600 mb-6">
            Choose the highest level you feel confident in — you can always adjust later.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleMathComfortLevelChange('arithmetic')}
            >
              5 × 1/2 = ?
              <br />
              Arithmetic
              <br />
              Introductory
            </button>
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleMathComfortLevelChange('basic_algebra')}
            >
              3x + 5 = 4
              <br />
              Basic Algebra
              <br />
              Foundational
            </button>
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleMathComfortLevelChange('intermediate_algebra')}
            >
              x = (-b ± √(b² - 4ac)) / 2a
              <br />
              Intermediate Algebra
              <br />
              Intermediate
            </button>
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => handleMathComfortLevelChange('calculus')}
            >
              ∫x²dx = ?
              <br />
              Calculus
              <br />
              Advanced
            </button>
          </div>
        </div>
      )}

      {userType && mathComfortLevel && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">You're on your way!</h1>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2569/2569154.png"
                alt="Monster"
                className="w-12 h-12"
              />
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="flex items-center">
              <span className="text-yellow-500 text-2xl mr-1">&#9733;</span>
              <span className="text-yellow-500 text-2xl mr-1">&#9733;</span>
              <span className="text-yellow-500 text-2xl mr-1">&#9733;</span>
              <span className="text-yellow-500 text-2xl mr-1">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
          </p>
          <p className="text-gray-600">— Jacob S.</p>
        </div>
      )}
    </div>
  );
};

export default App;