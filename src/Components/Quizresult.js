import React from 'react'
import "./Quiz.css";
export default function Quizresult(props) {


  return (<>
    <div className='Result'>
      Your Score: {props.score}  <br />
      Total Score: {props.totalscore}


    </div>
    <a className='nextbtn2' href="/gothere" >Go to Main Page</a>
    </>
  )
}
