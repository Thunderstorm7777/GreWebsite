import React from 'react'
import "./navbar.css";
import img5 from "./title3.png";
import { Link } from 'react-router-dom';

export default function Mainpage() {
  return (
    <div>
      <div className="container">
      <div id="logodiv">
          <img id="logo" src={img5} alt="" />
        </div>
        <div id="navbar">
          <ul>
            <li>
              <a href="/">
                <strong>Home</strong>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <strong>About</strong>
              </a>
            </li>
            <li>
              <a href="/">
                <strong>Services</strong>
              </a>
            </li>

            <li>
              <a href="/Sign-up">
                <strong>Login / Signup</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* main section */}

      <div className="maindiv">
        <h1 className='headingname'>GRE Vocabulory learning and Quizes</h1>
        <div className="common">
        <div className="first">
          <h2>Common Words! Level 1 </h2>
          <h4>1 to 6 words mastered</h4>
          <Link to="/cm1" className='firstbutton'>Start Learning &rarr;</Link>
        </div>
        <div className="second">
          <h2>Common Words! Level 2 </h2>
          <h4>1 to 6 words mastered</h4>
          <Link to="/cm2" className='secondbutton'>Start Learning &rarr;</Link>
        </div>
        <div className="third">
          <h2>Common Words! Level 3 </h2>
          <h4>1 to 6 words mastered</h4>
          <Link to="/cm3" className='thirdbutton'>Start Learning &rarr;</Link>
        </div>
        <div className="fourth">
          <h2>Common Words! Level 4 </h2>
          <h4>1 to 6 words mastered</h4>
          <Link to="/cm4"  className='fourthbutton'>Start Learning &rarr;</Link>
          </div>
        </div>
     
        <div className="quiz">
        <div className="fifth">
          <h2> Quiz for  Level 1 </h2>
          <h4>1 to 6 words mastered</h4>
          <Link to="/qz1" className='fifthbutton'>Give Quiz &rarr;</Link>
        </div>
        <div className="sixth">
          <h2>Quiz for Level 2 </h2>
          <h4>1 to 6 words mastered</h4>
          <Link to="/qz2" className='sixthbutton'>Give Quiz &rarr;</Link>
        </div>
        <div className="seventh">
          <h2>Quiz for Level 3 </h2>
          <h4>1 to 6 words mastered</h4>
          <Link to="/qz3" className='seventhbutton'>Give Quiz &rarr;</Link>
        </div>
        <div className="eight">
          <h2>Quiz for Level 4 </h2>
          <h4>1 to 6 words mastered</h4>
          <Link to="/qz4" className='eightbutton'>Give Quiz &rarr;</Link>
        </div>
        </div>
      </div>
    </div>
  )
}
