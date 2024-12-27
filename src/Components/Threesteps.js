import React from "react";
import { messages } from "./Componentdata.js";
import { useState } from "react";


function Steper() {
    const [step, setStep] = useState(1);

    function handlePrevious(){
        if(step>1) setStep(step-1);
    }

    function handleNext(){
       if(step<3) setStep(step+1);
    }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className = {`${step >= 1 ? " bg-primary" : ""}`} id="circle">1</div>
          <div className = {`${step >= 2 ? "bg-primary" : ""}`} id="circle">2</div>
          <div className = {`${step >= 3 ? "bg-primary" : ""}`} id="circle">3</div>
        </div>

        <p className="message text-center text-secondary bg-info">Step {step} :{messages[step-1]}</p>

        <div className="buttons">
          <button className="btn btn-primary " onClick={handlePrevious}>Previous</button>
          <button className="btn btn-primary" onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export { Steper };


