import React, {  useState } from "react";

import "./login.css"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          // window.localStorage.setItem("token", data.data);
          // window.localStorage.setItem("loggedIn", true);

          // window.location.href = "./userDetails";
        }
      });
  }

  return (
    <>
         <div className="contain">
        <form onSubmit={handleSubmit}>
          <h3 id="high">Sign In</h3>

          <div className="jack">
            <label>Email address</label><br />
            <input
              type="email"
              className="trol"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="jack">
            <label>Password</label><br />
            <input
              type="password"
              className="trol"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="jack">
            <div className="">
              <input
                type="checkbox"
                className=""
                id="Check1"
              />
              <label className="cust" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="grid">
            <button type="submit" className="why">
              Submit
            </button>
          </div>
          <p className="forgot" id="links">
            <a href="/sign-up">Sign Up</a>
            <a href="/gothere" className="linkhome">Main Page</a>
          </p>
        </form>
        </div>
    </>
  );
}