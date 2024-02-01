// import React, { useState, useEffect } from 'react';
// import './Quiz.css';
// const Quiz = () => {
  
//   const quizQuestions = [
//     {
//       question: 'What is the capital of France?',
//       options: ['Paris', 'Berlin', 'Rome', 'Madrid'],
//       answer: 'Paris',
//     },
//     {
//       question: 'Which planet is known as the Red Planet?',
//       options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
//       answer: 'Mars',
//     },
//     {
//       question: 'Who wrote "Romeo and Juliet"?',
//       options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'],
//       answer: 'William Shakespeare',
//     },
//   ];


//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userAnswer, setUserAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(60); // Set initial timer value in seconds
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     return () => {
//       clearInterval(timerInterval);
//     };
//   }, []);

//   useEffect(() => {
//     if (timer === 0) {
//       endQuiz();
//     }
//   }, [timer]);

//   const handleAnswer = (selectedAnswer) => {
//     setUserAnswer(selectedAnswer);
//   };

//   const handleSubmit = () => {
//     if (userAnswer === quizQuestions[currentQuestion].answer) {
//       setScore((prevScore) => prevScore + 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//       setUserAnswer(null); // Reset user's answer for the next question
//     } else {
//       endQuiz();
//     }
//   };

//   const endQuiz = () => {
//     // Handle quiz completion logic, e.g., show results
//     setQuizCompleted(true);
//   };

//   return (
//     <div className="quiz-app">
//       {quizCompleted ? (
//         <div className="quiz-results">
//           <h1>Quiz Completed!</h1>
//           <p>Your score: {score} out of {quizQuestions.length}</p>
//         </div>
//       ) : (
//         <div className="quiz-content">
//           <p>Timer: {timer} seconds</p>
//           <h2>{quizQuestions[currentQuestion].question}</h2>
//           {/* Display options for the current question */}
//           {quizQuestions[currentQuestion].options.map((option) => (
//             <button
//               key={option}
//               onClick={() => handleAnswer(option)}
//               disabled={userAnswer !== null}
//             >
//               {option}
//             </button>
//           ))}
//           <button onClick={handleSubmit} disabled={userAnswer === null}>
//             Submit
//           </button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;
// import React, { useRef, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Quiz.css";
// import { data } from "./data";

// const Quiz = () => {
//   let [index, setIndex] = useState(0);
//   let [question, setQuestion] = useState(data[index]);
import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Quiz.css";
import { data } from "./data";

// Function to shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const Quiz = () => {
  // Shuffle the data array and get the first 5 elements
  const quizData = shuffle(data).slice(0, 5);

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(quizData[index]);
  // Rest of your code...
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [timeLeft, setTimeLeft] = useState(30);
  

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === quizData.length - 1) { // Use quizData.length instead of data.length
        setResult(true);
        return 0;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(quizData[index + 1]); // Use quizData instead of data
      setLock(false);
      setTimeLeft(30);
      option_array.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  // const next = () => {
  //   if (lock === true) {
  //     if (index === data.length - 1) {
  //       setResult(true);
  //       return 0;
  //     }
  //     setIndex((prevIndex) => prevIndex + 1);
  //     setQuestion(quizData[index + 1]);
  //     setLock(false);
  //     setTimeLeft(30);
  //     option_array.forEach((option) => {
  //       option.current.classList.remove("wrong");
  //       option.current.classList.remove("correct");
  //     });
  //   }
  // };

  const getButtonLabel = () => {
    return index === quizData.length - 1 ? "Submit" : "Next";
  };

  const reset = () => {
    setIndex(0);
    setQuestion(quizData[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setTimeLeft(30);
  };

  React.useEffect(() => {
    if (timeLeft > 0 && lock === false) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    } else if (timeLeft === 0 && lock === false) {
      // Automatically submit the quiz when the timer hits 0
      // submitQuiz();
      setIndex((prevIndex)=>prevIndex+1);
      setQuestion(quizData[index+1]);
      setTimeLeft(30);
    }
  }, [timeLeft, lock]);
  
  // const submitQuiz = () => {
  //   // Additional logic to handle quiz submission
  //   setResult(true);
  // };
  const calculateIQ= () => {
    const rawIQ = (score/5)*100
    const normalizedIQ = (rawIQ/100)*15 + 100;
    return Math.round(normalizedIQ);
  };

  return (
    <div className="container">
      <h1>Quiz App </h1>
      <hr />
      {result ? (
        <>
          <h2>You Scored {score} out of {quizData.length}</h2>
          <h3>Your IQ-like Score:{calculateIQ()}</h3>
          <button onClick={reset}>Reset</button>
          {/* <Link to={{pathname: '/certificate',state: { username: 'John Doe', score: 100 }}}>Go to Certificate</Link> */}
          <Link to="/Certificate"><button className="certificate">Go to Certificate</button></Link>
        </>
      ) : (
        <>
          <h2>{index + 1}.{question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>
              {question.option1}
            </li>
            <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>
              {question.option2}
            </li>
            <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>
              {question.option3}
            </li>
            <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>{getButtonLabel()}</button>
          <div className="index">
            {index + 1} of {quizData.length} questions
            </div>
          {/* <div className="index">
            {index + 1} of {data.length} questions
          </div> */}
          <div className="timer">Time Left: {timeLeft}</div>
          
        </>
      )}
    </div>
  );
};

export default Quiz;