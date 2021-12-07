import { Button } from "@mui/material";
import React from "react";
import "./other.css";
const Other = ({setActiveStep}) => {
    const handleDecrement=()=>{
        setActiveStep(activeStep=>activeStep-1)
    }
  return (
      <>
    <div className="othercontain">
      <div className="box">
        <h5>Selfie</h5>
      </div>
      <div className="box">
        <h5>Pan document</h5>
      </div>
      <div className="box">
        <h5>Aadhar document front</h5>
      </div>
      <div className="box">
        <h5>Aadhar document back</h5>
      </div>
    </div>
      <div  className='btns'>

      <Button variant='contained' onClick={handleDecrement}>Back</Button>
      <Button variant='contained'>Finish</Button>
      </div>
      </>
  );
};

export default Other;
