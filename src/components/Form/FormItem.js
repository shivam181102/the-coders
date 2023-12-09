import React, { useState, useEffect } from "react";
import data from '../data.json'
import QuestionType from "./QuestionType";
import Email from "./Email";
import DateTime from "./DateTime";
function FormItem() {
    // console.log(data)
    const handleSubmit=(e)=>{
      e.preventDefault();
    }
    const handleInputChange1 = (e) => {
      setpercent( e.target.value);
    };
    let TotalMcq = data.mcq.length;
    let TotalCode = data.coding.length;
    let TotalFill = 5;
    const [percent, setpercent] = useState()
    const [mcq, setmcq] = useState({
      question: 0,
      marks: 0
  });
    const [code, setcode] = useState({
      question: 0,
      marks: 0
  });
    const [fill, setfill] = useState({
      question: 0,
      marks: 0
  });
    const[total,settotal]= useState(0)
    function calculateTotal() {
      // let sum = (code.marks*code.question)+(mcq.marks*mcq.question)+(fill.marks*fill.question);
      // settotal(sum)
      // console.log(mcq.question,mcq.marks,code.question,code.marks,fill.question,fill.marks)
    }
    useEffect(() => {
      // Perform any logic or calculations needed
      const updatedSecondState = (code.marks*code.question)+(mcq.marks*mcq.question)+(fill.marks*fill.question) ;
      
      // Update the second state
      settotal(updatedSecondState);
    }, [mcq,code,fill]);
  return (
    <div className="container">
      <form onSubmit={ handleSubmit}>
      <div className="input mb-3">
        <span className="input-text" id="inputGroup-sizing-default">
          Enter Exam Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <label htmlFor="templet-Select">Select the Templet</label>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        id="templet-Select"
        label="Select one"
      >
        {/* <option >Open this select menu</option> */}
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <QuestionType total={TotalMcq} title="Mcq" set={mcq} useset={setmcq} totalmarks={calculateTotal}/>
      <QuestionType total={TotalCode} title="Coding" set={code} useset={setcode} totalmarks={calculateTotal}/>
      <QuestionType total={TotalFill} title="Fill" set={fill} useset={setfill} totalmarks={calculateTotal}/>
      
<br />
    
    <h3>Total Marks: {total}</h3>
    <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-small">Enter Passing Marks</span>
  <input type="number" className="form-control" placeholder="Enter Number" max={total} onChange={handleInputChange1} aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text" id="basic-addon2">{NaN?0:Math.round(((percent/total)*100),2)}%</span>
</div>
    <div className="container  p-3 mb-5 bg-body rounded border">
    <Email/>
    </div>
    <DateTime />
    <div className="col-12">
      <br />
    <button type="submit"  className="btn btn-primary text-center">Sign in</button>
  </div>
  </form>
    </div>
  );
}

export default FormItem;
