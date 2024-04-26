import React from "react";
import img1 from "./instagram.png";
import img2 from "./twitter.png";
import img3 from "./facebook.png";
import img4 from "./google.png";
import img5 from "./title3.png";
import img6 from "./grehome.png";
import photo1 from "./photo1.png";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.png";
import photo4 from "./photo4.png";
import "./navbar.css";

export default function Homepage() {
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
                <strong>Login / Signup</strong>
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
            <a href="https://instagram.com/_kunal__06_?igshid=OTk0YzhjMDVlZA=="> <img src={img1} alt=""  /></a>
          <img src={img2} alt="" />
         <a href="https://www.facebook.com/profile.php?id=100034853743011&mibextid=ZbWKwL"> <img src={img3} alt="" /></a>
          <img src={img4} alt="" />
        </div>
      </div>

      <div className="home">
        <div className="leftside">
          <img id="image6" src={img6} alt="" />
        </div>
        <div className="rightside">
          <h1>Improve your GRE Verbal Score</h1>
          <h2>
            Master the 1000 most important GRE words with free online flashcards
            from Gre Vocabulary
          </h2>
          <a className="start1" href="/gothere" target="_blank">Start studying online &rarr; </a>
        </div>
      </div>
      <div className="about">
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
      </div>
    </>
  );
}
