import React, { useState } from "react";
import { Box, Stepper, StepLabel, Step, Typography, Button } from "@mui/material";

const steps: string[] = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const MuiStepper = () => {

  const [activeStep, setActiveStep] = useState<number>(1);
  const [skipped, setSkipped] = useState(new Set<number>());

  function isStepOptional(step: number) {
   return step === 1;
  }

  function isSkippedNumber(step: number) {
   return skipped.has(step);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function handleBack() {
    setActiveStep(prev => prev - 1);
  }

  function handleSkipped() {
    if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");

    setActiveStep(prevStep => prevStep + 1);
    setSkipped(prevSkip => {
      const newPrevSkip = new Set(prevSkip.values());
      newPrevSkip.add(activeStep);
      return newPrevSkip;
    })
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isSkippedNumber(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevStep => prevStep + 1);
    setSkipped(newSkipped);
  }

  return (
    <React.Fragment>
      <Box width={"50%"} margin={"auto"} marginTop={3}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const labelProps: { optional?: React.ReactNode } = {};
            const stepProps: { completed?: boolean } = {};

            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }

            if (isSkippedNumber(index)) {
              stepProps.completed = false;
            }

            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography>All Steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: "flex", flexDirection: "row-reverse", pt: 2 }}>
            <Button
              sx={{ paddingX: 4, marginRight: 4 }}
              variant="contained"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ marginTop: 3, marginLeft: 4 }} variant="h5">
            Step {activeStep + 1}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              disabled={activeStep === 0}
              color="inherit"
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ padding: 1}}>
              {isStepOptional(activeStep) && (
                <Button sx={{ mr: 1 }} color="inherit" onClick={handleSkipped}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length -1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MuiStepper;
