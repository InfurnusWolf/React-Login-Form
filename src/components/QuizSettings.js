import React, { useState } from "react";

const QuizSettings = ({ onStartQuiz }) => {
  const [selectedClass, setSelectedClass] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState("easy");

  const classOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleClassChange = (e) => {
    setSelectedClass(parseInt(e.target.value, 10));
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  const handleStartQuiz = () => {
    onStartQuiz(selectedClass, selectedLevel);
  };

  return (
    <div className="quiz-settings">
      <h1>Quiz Settings</h1>
      <label htmlFor="classSelect">Select Class:</label>
      <select id="classSelect" value={selectedClass} onChange={handleClassChange}>
        {classOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="levelSelect">Select Level:</label>
      <select id="levelSelect" value={selectedLevel} onChange={handleLevelChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default QuizSettings;