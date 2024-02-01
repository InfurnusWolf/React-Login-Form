// // import React from "react"
// // import {useLocation, useNavigate} from 'react-router-dom';

// // function Home (){
// //     const location=useLocation()

// //     return (
// //         <div className="homepage">

// //             <h1>Hello {location.state.id} and welcome to the home</h1>

// //         </div>
// //     )
// // }

// // export default Home



// // HomePage.js
// import React, { useState } from 'react';
// import { useNavigate, Link } from "react-router-dom"
// import './Home.css'; 

// const Home = () => {
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfileDropdown(!showProfileDropdown);
//     const navigate = useNavigate(); // Add this line

//     const startQuiz = () => { // Add this function
//       navigate('/Quiz');
//     };
//   };
  

//   return (
//     <div className="home-page">
//       <header>
//         <div className="profile-container">
//           <button className="profile-button" onClick={handleProfileClick}>
//             <img src="path/to/profile-image.jpg" alt="Profile" />
//           </button>
//           {showProfileDropdown && (
//             <div className="profile-dropdown">
//               {/* User details go here */}
//               <p>User Name</p>
//               <p>Email@example.com</p>
//               {/* Add more user details as needed */}
//             </div>
//           )}
//         </div>
//       </header>
//       <main>
//         <section className="quote-section">
//           <h1>Welcome to the Quiz Application!</h1>
//           <p>
//             "The only limit to our realization of tomorrow will be our doubts of today."
//           </p>
//         </section>
//         <section className="instructions-section">
//           <h2>Instructions:</h2>
//           <p>Read each question carefully and choose the correct answer.</p>
//           <p>There is a time limit for each question, so answer quickly!</p>
//         </section>
//         {/* <section className="start-quiz-section">
//           <button className="start-quiz-button">Start Quiz</button>
//         </section> */}
//         <section className="start-quiz-section">
          
//           <Link to="/Quiz"><button className="start-quiz-button">Start Quiz</button></Link>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './Home.css'; 

const Home = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  }

  const handleLevelSelect = (difficulty) => {
    navigate('/Quiz', { state: { difficulty } });
  }

  return (
    <div className="home-page">
      <header>
        <div className="profile-container">
          <button className="profile-button" onClick={handleProfileClick}>
            <img src="path/to/profile-image.jpg" alt="Profile" />
          </button>
          {showProfileDropdown && (
            <div className="profile-dropdown">
           
              <p>User Name</p>
              <p>Email@example.com</p>
              
            </div>
          )}
        </div>
      </header>
      <main>
        <section className="quote-section">
          <h1>Welcome to the Quiz Application!</h1>
          <p>
            "The only limit to our realization of tomorrow will be our doubts of today."
          </p>
        </section>
        <section className="instructions-section">
          <h2>Instructions:</h2>
          <p>Read each question carefully and choose the correct answer.</p>
          <p>There is a time limit for each question, so answer quickly!</p>
        </section>
        <section className="start-quiz-section">
          <button className="select-level-button" onClick={() => handleLevelSelect('easy')}>Select Level: Beginner</button>
          <button className="select-level-button" onClick={() => handleLevelSelect('medium')}>Select Level: Intermediate</button>
          <button className="select-level-button" onClick={() => handleLevelSelect('hard')}>Select Level: Advanced</button>
        </section>
      </main>
    </div>
  );
}

export default Home;
