import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Index = () => {
  const [step, setStep] = useState(1);

  //   goNextStep
  function addStepCount() {
    setStep(step + 1);
  }

  return (
    <div>
      {step === 1 && <Step1 addStepCount={addStepCount} />}
      {step === 2 && <Step2 addStepCount={addStepCount} />}
      {step === 3 && <Step2 addStepCount={addStepCount} />}
      {step === 4 && <Step2 addStepCount={addStepCount} />}
    </div>
  );
};

export default Index;
