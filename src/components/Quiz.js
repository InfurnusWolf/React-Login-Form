// import React, { useRef, useState } from "react";
// import "./Quiz.css";
// import QuizSettings from "./QuizSettings";
// import { class1Questions } from "./class1Questions";
// import { class2Questions } from "./class2Questions";
// import { class3Questions } from "./class3Questions";
// import { class4Questions } from "./class4Questions";
// import { class5Questions } from "./class5Questions";
// // ... (import other class question files)

// const classQuestions = [class1Questions ,class1Questions, class2Questions, class3Questions,class4Questions,class5Questions]; // Add other class question arrays

// const Quiz = () => {
//   let [index, setIndex] = useState(0);
//   let [question, setQuestion] = useState(classQuestions[0][index]);
//   let [lock, setLock] = useState(false);
//   let [score, setScore] = useState(0);
//   let [result, setResult] = useState(false);
//   let [timeLeft, setTimeLeft] = useState(20);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedLevel, setSelectedLevel] = useState(null);

//   const startQuiz = (selectedClass, selectedLevel) => {
//     setSelectedClass(selectedClass);
//     setSelectedLevel(selectedLevel);
//     setQuizStarted(true);
//     setTimeLeft(20);

//     let questionFile;
//     if (selectedLevel === "easy") {
//       questionFile = classQuestions[selectedClass];
//     } else if (selectedLevel === "medium") {
//       questionFile = classQuestions[selectedClass + 1];
//     } else if (selectedLevel === "hard") {
//       questionFile = classQuestions[selectedClass + 2];
//     } else {
//       // Handle other levels if needed
//     }

//     setQuestion(questionFile[0]);
//   };

//   let Option1 = useRef(null);
//   let Option2 = useRef(null);
//   let Option3 = useRef(null);
//   let Option4 = useRef(null);

//   let option_array = [Option1, Option2, Option3, Option4];



//   const checkAns = (e, ans) => {
//     if (lock === false) {
//       const correctAnswer = classQuestions[selectedClass][index].ans;
//       if (correctAnswer === ans) {
//         e.target.classList.add("correct");
//         setLock(true);
//         setScore((prev) => prev + 1);
//       } else {
//         e.target.classList.add("wrong");
//         option_array[correctAnswer - 1].current.classList.add("correct");
//         setLock(true);
//       }
//     }
//   };
  
  

//   const next = () => {
//     if (lock === true) {
//       const totalQuestions = classQuestions[selectedClass].length;
//       if (index === totalQuestions - 1) {
//         setResult(true);
//         return 0;
//       }
//       setIndex((prevIndex) => prevIndex + 1);
//       setQuestion(classQuestions[selectedClass][index + 1]);
//       setLock(false);
//       setTimeLeft(20);
//       option_array.forEach((option) => {
//         option.current.classList.remove("wrong");
//         option.current.classList.remove("correct");
//       });
//     }
//   };
  


//   const getButtonLabel = () => {
//     const totalQuestions = classQuestions[selectedClass].length;
//     return index === totalQuestions - 1 ? "Submit" : "Next";
//   };
  

//   const reset = () => {
//     setIndex(0);
//     setQuestion(classQuestions[selectedClass][0]);
//     setScore(0);
//     setLock(false);
//     setResult(false);
//     setTimeLeft(20);
//     setQuizStarted(false); // Add this line to reset the quiz
//   };

//   React.useEffect(() => {
//     if (timeLeft > 0 && lock === false) {
//       const timer = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
  
//       return () => {
//         clearInterval(timer);
//       };
//     }
  
//     if (timeLeft === 0 && lock === false) {
//       if (index === classQuestions[selectedClass].length - 1) {
//         // If it's the last question, automatically submit the quiz
//         // submitQuiz();
//         setIndex((prevIndex) => prevIndex + 1);
//         setQuestion(classQuestions[selectedClass][index + 1]);
//       } else {
//         // Move to the next question
//         setIndex((prevIndex) => prevIndex + 1);
//       setQuestion(classQuestions[selectedClass][index + 1]);
//       setLock(false);
//       setTimeLeft(20);
//       }
//     }
//   }, [timeLeft, lock, index, selectedClass, classQuestions]);
  
  
//   const submitQuiz = () => {
//     // Additional logic to handle quiz submission
//     setResult(true);
//   };

//   const calculateIQ = () => {
//     // Assuming each correct answer contributes equally to the IQ score
//     const rawIQ = (score / classQuestions[selectedClass].length) * 100;

//     // IQ scores are typically normalized with a mean of 100 and a standard deviation of 15
//     const normalizedIQ = (rawIQ / 100) * 15 + 100;

//     return Math.round(normalizedIQ);
//   };



// return (
//   <div className="container">
//     {quizStarted ? (
//       result ? (
//         <>
//           <h2>You Scored {score} out of {classQuestions[selectedClass].length}</h2>
//           <h3>Your IQ-like Score: {calculateIQ()}</h3>
//           <button onClick={reset}>Reset</button>
//         </>
//       ) : (
//         <>
//           <h2>{index + 1}.{question.question}</h2>
//           <ul>
//             <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>
//               {question.option1}
//             </li>
//             <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>
//               {question.option2}
//             </li>
//             <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>
//               {question.option3}
//             </li>
//             <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>
//               {question.option4}
//             </li>
//           </ul>
//           <button onClick={next}>{getButtonLabel()}</button>
//           <div className="index">
//             {index + 1} of {classQuestions[selectedClass].length} questions
//           </div>
//           <div className="timer">Time Left: {timeLeft}</div>
//         </>
//       )
//     ) : (
//       <QuizSettings onStartQuiz={startQuiz} />
//     )}
//   </div>
// );
//     }

// export default Quiz;


import React, { useRef, useState } from "react";
import "./Quiz.css";
import QuizSettings from "./QuizSettings";
import { class1Questions } from "./class1Questions";
import { class2Questions } from "./class2Questions";
import { class3Questions } from "./class3Questions";
import { class4Questions } from "./class4Questions";
import { class5Questions } from "./class5Questions";
import { class6Questions } from "./class6Questions";
import { class7Questions } from "./class7Questions";
import { class8Questions } from "./class8Questions";
import { class9Questions } from "./class9Questions";
import { class10Questions } from "./class10Questions";
import { class11Questions } from "./class11Questions";
import { class12Questions } from "./class12Questions";
// ... (import other class question files)

const classQuestions = [class1Questions ,class1Questions, class2Questions, class3Questions,class4Questions,class5Questions,class6Questions,class7Questions,class8Questions,class9Questions,class10Questions,class11Questions,class12Questions]; // Add other class question arrays

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(null);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [timeLeft, setTimeLeft] = useState(20);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);


  const startQuiz = (selectedClass, selectedLevel) => {
    setSelectedClass(selectedClass);
    setSelectedLevel(selectedLevel);
    setQuizStarted(true);
    setTimeLeft(20);
  
    let questionFile;
    if (selectedLevel === "easy") {
      questionFile = classQuestions[selectedClass];
    } else if (selectedLevel === "medium") {
      questionFile = classQuestions[selectedClass + 1];
    } else if (selectedLevel === "hard") {
      questionFile = classQuestions[selectedClass + 2];
    } else {
      // Handle other levels if needed
    }
  
    const shuffledQuestions = questionFile.sort(() => Math.random() - 0.5);
    const selectedQuestions = [];
    
    // Select 5 unique questions
    while (selectedQuestions.length < 5 && shuffledQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * shuffledQuestions.length);
      const selectedQuestion = shuffledQuestions.splice(randomIndex, 1)[0];
      selectedQuestions.push(selectedQuestion);
    }
  
    setSelectedQuestions(selectedQuestions);
    setQuestion(selectedQuestions[0]);
  };
  

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];



  const checkAns = (e, ans) => {
    if (lock === false) {
      const correctAnswer = selectedQuestions[index].ans;
      if (correctAnswer === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        option_array[correctAnswer - 1].current.classList.add("correct");
        setLock(true);
      }
    }
  };
  
  
  
  const next = () => {
    if (lock === true) {
      const totalQuestions = selectedQuestions.length; // Use selectedQuestions instead of classQuestions
      if (index === totalQuestions - 1) {
        setResult(true);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(selectedQuestions[index + 1]); // Update the question based on the new index
      setLock(false);
      setTimeLeft(20);
      option_array.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };
  


  const getButtonLabel = () => {
    const totalQuestions = classQuestions[selectedClass].length;
    return index === totalQuestions - 1 ? "Submit" : "Next";
  };
  

  const reset = () => {
    setIndex(0);
    setQuestion(classQuestions[selectedClass][0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setTimeLeft(20);
    setQuizStarted(false); // Add this line to reset the quiz
  };

  React.useEffect(() => {
    if (timeLeft > 0 && lock === false) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }
  
    if (timeLeft === 0 && lock === false) {
      if (index === classQuestions[selectedClass].length - 1) {
        // If it's the last question, automatically submit the quiz
        // submitQuiz();
        setIndex((prevIndex) => prevIndex + 1);
        setQuestion(classQuestions[selectedClass][index + 1]);
      } else {
        // Move to the next question
        setIndex((prevIndex) => prevIndex + 1);
      setQuestion(classQuestions[selectedClass][index + 1]);
      setLock(false);
      setTimeLeft(20);
      }
    }
  }, [timeLeft, lock, index, selectedClass, classQuestions]);
  
  
  const submitQuiz = () => {
    // Additional logic to handle quiz submission
    setResult(true);
  };

  // const calculateIQ = () => {
  //   // Assuming each correct answer contributes equally to the IQ score
  //   const rawIQ = (score / classQuestions[selectedClass].length) * 100;

  //   // IQ scores are typically normalized with a mean of 100 and a standard deviation of 15
  //   const normalizedIQ = (rawIQ / 100) * 15 + 100;

  //   return Math.round(normalizedIQ);
  // };

  const calculateIQ = () => {
    // Define point multipliers for different difficulty levels
    const difficultyMultiplier = {
      easy: 1,
      medium: 1.5,
      hard: 2
    };
  
    // Define point multipliers for different classes
    const classMultiplier = {
      1: 1,
      2: 1.2,
      3: 1.4,
      4: 1.6,
      5: 1.8
    };
  
    // Calculate raw score based on the number of correct answers
    const rawScore = score * difficultyMultiplier[selectedLevel] * classMultiplier[selectedClass];
  
    // Normalize raw score to IQ-like score
    const normalizedIQ = (rawScore / classQuestions[selectedClass].length) * 100;
  
    // IQ scores are typically normalized with a mean of 100 and a standard deviation of 15
    const normalizedIQScore = (normalizedIQ / 100) * 15 + 100;
  
    return Math.round(normalizedIQScore);
  };



return (
  <div className="container">
    {quizStarted ? (
      result ? (
        <>
          <h2>You Scored {score} out of 5</h2>
          <h3>Your IQ-like Score: {calculateIQ()}</h3>
          <button onClick={reset}>Reset</button>
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
            {index + 1} of 5 questions
          </div>
          <div className="timer">Time Left: {timeLeft}</div>
        </>
      )
    ) : (
      <QuizSettings onStartQuiz={startQuiz} />
    )}
  </div>
);
    }

export default Quiz;