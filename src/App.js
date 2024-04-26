
import './App.css';
import Commonpage from './Components/Commonpage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Homepage from './Components/Homepage.js';
import Mainpage from './Components/Mainpage.js';
import Quiz from './Components/Quiz';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,

} from "react-router-dom";



function App() {
  return (
    <>
     
      <Router>

        <Routes>

          <Route exact path="/"
            element={<Homepage />} />

          <Route exact path="/gothere"
            element={<Mainpage />} />
         <Route exact path="/kunal"
            element={<Quiz />} />
            <Route exact path="/patil"
            element={<Commonpage />} />
              <Route path="/sign-in" element={<Login/>} />
          <Route path="/sign-up" element={<Signup />} />
            <Route exact path="/cm1"
            element={<Commonpage start={0} end={5}/>} />
            <Route exact path="/cm2"
            element={<Commonpage start={6} end={11} />} />
            <Route exact path="/cm3"
            element={<Commonpage start={12} end={17} />} />
            <Route exact path="/cm4"
            element={<Commonpage start={18} end={23} />} />
            <Route exact path="/qz1"
            element={<Quiz start={0} end={5}/>} />
            <Route exact path="/qz2"
            element={<Quiz start={6} end={11}/>} />
            <Route exact path="/qz3"
            element={<Quiz start={12} end={17}/>} />
            <Route exact path="/qz4"
            element={<Quiz start={18} end={23}/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
