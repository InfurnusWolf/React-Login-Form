import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Quiz from "./components/Quiz"
import data from "./components/data"
import Page from "./components/Page"
import Level from "./components/Level"
import Certificate from "./components/Certificate"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import "./components/Page.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Quiz" element={<Quiz/>}/>
          <Route path="/Certificate" element={<Certificate/>}/>
          <Route path="/Level" element={<Level/>}/>
          <Route path="/" element={<Page/>}/>
          <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;




// import Home from "./Home"
// import Login from "./Login"
// import Signup from "./Signup"
// import Quiz from "./Quiz"


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/Login" element={<Login/>}/>
//           <Route path="/Signup" element={<Signup/>}/>
//           <Route path="/Home" element={<Home/>}/>
//           <Route path="/Quiz" element={<Quiz/>}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



