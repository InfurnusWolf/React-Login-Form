// import React from 'react';
// import './Level.css';
// import {useNavigate,Link} from "react-router-dom"


// function Difficulty(props) {
//   return (
//     <div className={`difficulty ${props.difficulty}`}>
//       <h2>{props.difficulty}</h2>
//       <p>{props.description}</p>
//     </div>
//   );
// }

// function Level() {
//   return (
//     <div className="level">
//       <Link to='./Quiz'><Difficulty difficulty="easy" description="Perfect for beginners" ></Link>
//       <Difficulty difficulty="medium" description="A challenge for the curious" />
//       <Difficulty difficulty="hard" description="Only for the wizards" />
//     </div>
//   );
// }

// export default Level;


import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Level = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state || !location.state.difficulty) {
      navigate('/');
    }
  }, [location, navigate])

  return (
    <div className="level-page">
      <h1>Selected Difficulty: {location.state.difficulty}</h1>
      <button className="start-quiz-button" onClick={() => navigate('/Quiz')}>Start Quiz</button>
    </div>
  )
}

export default Level;
