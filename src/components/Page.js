// import React from 'react';
// import './Page.css';
// import { useNavigate, Link } from "react-router-dom";


// function Navbar() {
//   return (
//     <nav className="navbar">
//       <img src="wizkidslogo2.png" alt="Logo" className="logo" />
//       <div className="nav-links">
//       <Link to="/Contact"><a href="#Contact">Contact</a></Link>
//         <Link to="/"><a href="#Page">Home</a></Link>
//         <Link to="/About"><a href="#About">About</a></Link>
//         <Link to="/Login"><a href="#login">Login</a></Link>
//       </div>
//     </nav>
//   );
// }
  


// // function Grid() {
// //     return (
// //         <section>
// //       <div className="grid-container">
// //         <div className="grid-item">Self-Discovery: A quiz can help a kid gain insights into their cognitive abilities and problem-solving skills. It might reveal areas where they excel and areas where they might want to focus on improvement. </div>
// //         <div className="grid-item">Educational Planning: Understanding one's intellectual strengths can be useful in educational planning. It can help identify areas where a child might need extra support or enrichment, allowing parents and educators to tailor learning experiences accordingly.</div>
// //         <div className="grid-item">Motivation: Some kids find the challenge of a quiz motivating. The desire to perform well can inspire a child to engage with learning materials and seek out new challenges.</div>
// //         <div className="grid-item">Identifying Giftedness: While a single IQ test may not capture the full spectrum of a child's abilities, it can be a tool to identify giftedness in certain areas. This information can guide educators in providing appropriate educational opportunities for a child with exceptional intellectual abilities.</div>
// //       </div>
// //       </section>
// //       );
// //   }


// function MainText() {
//   return (
//     <section>
//     <div className="main-text">
//       <h1>WIZKIDS</h1>
//       <h3><pre>          -Unlock your mind's potential!</pre></h3>
//       <Link to="/Signup"><button className="login-button">SignUp</button></Link>
      
//     </div>
//     </section>
//     );
// }



 
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <MainText />
//       {/* <Grid/> */}
     
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import './Page.css';
// const Page = () => {
//   return (
//     <div>
//       <section id="home">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-8">
//               <h1 className="display-4 fw-bolder mb-4 text-center text-white">
//                 Unlock your mind's potential
//               </h1>
//               <p className="lead text-center fs-4 mb-5 text-white">
//                 Get ready for a quiz extravaganza! Explore different topics and
//                 prove your expertise ,Unleash your inner quizmaster! Engage in
//                 mind-boggling quizzes , compete for the top spot And Expand your
//                 knowledge horizons!
//               </p>
//               <div className="buttons d-flex justify-content-center">
//                 <button
//                   className="btn btn-light me-4
//                                 rounded-pill px-4 py-2"
//                 >
//                   Get Quote
//                 </button>
//                 <button
//                   className="btn btn-outlight-light
//                                  rounded-pill px-4 py-2"
//                 >
//                   Our Services
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;


import React from "react";
import './Page.css';
import Navbar from './Navbar'; // Adjust the path according to your project structure

const Page = () => {
  return (
    <div>
      <Navbar />
      <section id="Page">
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-8 move-up">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Unlock your mind's potential
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Get ready for a quiz extravaganza! Explore different topics and
                prove your expertise ,Unleash your inner quizmaster! Engage in
                mind-boggling quizzes , compete for the top spot And Expand your
                knowledge horizons!
              </p>
              <div className="buttons d-flex justify-content-center">
                <button
                  className="btn btn-light me-4
                                rounded-pill px-4 py-2"
                >
                  Get Quote
                </button>
                <button
                  className="btn btn-light me-4
                                 rounded-pill px-4 py-2"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;