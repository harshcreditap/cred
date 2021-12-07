import React, { useState } from "react";
import "./app.css";
import Stepper from "@mui/material/Stepper";
import HomePage from "./components/HomePage";
import Address from "./components/Address";

import { Box } from "@mui/system";
import { Step, StepLabel } from "@mui/material";
import Other from "./components/Other";
const App = () => {
  const steps = ["Basic Details", "Addresss Details", "Other Details"];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container">
      <div className="white_nav">
        <img
          src="https://portal.creditap.in/static/media/logo.60f9d361.svg"
          alt=""
        />
        <svg
          className="MuiSvgIcon-root DropDown_user__1Ljbc"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
        </svg>
      </div>
      <div className="red_nav">
        <ul>
          <li>Dashbooard</li>
          <li>Profile</li>
          <li>Applications</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="stepper">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <div>
        {activeStep === 0 ? (
          <HomePage activeStep={activeStep} setActiveStep={setActiveStep} />
        ) : null}
        {activeStep === 1 ? (
          <Address activeStep={activeStep} setActiveStep={setActiveStep} />
        ) : null}
        {activeStep === 2 ? <Other activeStep={activeStep} setActiveStep={setActiveStep}/> : null}
      </div>
    </div>
  );
};

export default App;
