import React,{useState} from 'react'
import "./Quiz.css";
import { Quizdata } from './Quizdata';
import Quizresult from './Quizresult';

export default function Quiz(props) {
    const [currentquestion, setcurrentquestion] = useState(props.start);
    const [score, setscore] = useState(0)
    const [clicked, setclicked] = useState(0)
    const [result, setresult] = useState(false)

    const nextquestion=()=>{
         updatescore()
        if(currentquestion <  props.end){
        setcurrentquestion(currentquestion+1)
        setclicked(0)
    }
    else
    {
        setresult(true)
    }
    }
    const updatescore=()=>{
        if(clicked===Quizdata[currentquestion].answer)
        {
            setscore(score+1)
        }
    }

    
  return (
   
    <div className="quizbox">
       <div className="quizdiv">
       <h1>Quiz App</h1>
        {(result)?<Quizresult score={score} totalscore={6}/>:(
        
          <>
            <div className="textbox">{currentquestion+1}. {Quizdata[currentquestion].question}</div>

            <div className="optionsdiv">
                {Quizdata[currentquestion].options.map((option,i)=>{
                    return (
                        <button className={`options ${clicked===i+1?"click":null}` } key={i} onClick={()=>setclicked(i+1)}>{option}</button>
                    )
                })}
            </div>

            <button className="nextbtn" onClick={nextquestion}>Next</button>
            </>
          )}
          
        
        </div>
    </div>
    
  )
}
