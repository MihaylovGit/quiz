import { Component, useState } from "react";
import "../src/app.css";
import Quiz from "./components/quiz";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1); 
  const moneyPyramid = [
   {id: 1, amount:"100 лв"},
   {id: 2, amount:"200 лв"},
   {id: 3, amount:"300 лв"},
   {id: 4, amount:"400 лв"},
   {id: 5, amount:"500 лв"},
   {id: 6, amount:"1 000 лв"},
   {id: 7, amount:"1 500 лв"},
   {id: 8, amount:"2 000 лв"},
   {id: 9, amount:"3 000 лв"},
   {id: 10, amount:"5 000 лв"},
   {id: 11, amount:"10 000 лв"},
   {id: 12, amount:"20 000 лв"},
   {id: 13, amount:"30 000 лв"},
   {id: 14, amount:"50 000 лв"},
   {id: 15, amount:"100 000 лв"},
  ].reverse();
  return (
    <div className="app">
     <div className="main">main</div>
     <div className="top"></div>
     <div className="timer">30</div>
     <div className="bottom">
    <Quiz/>
     </div>
     <div className="pyramid">money</div>
     <ul className="moneyList">
      {moneyPyramid.map((m) => (
        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
      <span className="moneyListItemNumber">{m.id}</span>
      <span className="moneyListItemAmount">{m.amount}</span>
      </li>
      ))}
     </ul>
    </div>
  );
}

export default App;
