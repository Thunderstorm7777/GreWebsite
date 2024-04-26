import React, { useState } from "react";
import "./Quiz.css";
import { Quizdata } from "./Quizdata";

import "./navbar.css";
import img5 from "./tokopedia.png";

export default function Commonpage(props) {
  const [currentquestion, setcurrentquestion] = useState(props.start);

  const nextquestion = () => {
    if (currentquestion < props.end) {
      setcurrentquestion(currentquestion + 1);
    } else {
    }
  };

  return (
    <>
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
              <a href="/sign-up">
                <strong>Login /Sign up</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h1  className="commonwords"> <a href="/gothere" style={{textDecoration:"none",color:"white"}}>&larr; Common Words!</a> </h1>
      <button className="createacc">
        You should <a href="/" style={{color:"white"}}>create an account</a> create an account to save
        your progress. It only takes a minute!
      </button>
      <div className="quizbox2">
        <div className="quizdiv">
          <div className="textbox5">
            {currentquestion + 1}. {Quizdata[currentquestion].word}
          </div>

          <div className="optionsdiv">
            {Quizdata[currentquestion].options.map((option, i) => {
              if (Quizdata[currentquestion].answer === i + 1) {
                return (
                  <button className="options" key={i}>
                    {option}
                  </button>
                );
              } else {
                return null;
              }
            })}
          </div>

          <button className="nextbtn" onClick={nextquestion}>
            Next
          </button>
        </div>
      </div>
      <h5 className="feedback">
        Having a feedback about this page? Please email at{" "}
        <a href="www.gmail.com" style={{color:"white"}}>kunalpatil2226@gmail.com</a>{" "}
      </h5>
    </>
  );
}
