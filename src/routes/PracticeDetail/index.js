import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Index = () => {
  const [step, setStep] = useState(1);

  function goNextStep() {
    setStep(step + 1);
  }

  return (
    <div>
      {step === 1 && <Step1 goNextStep={goNextStep} />}
      {step === 2 && <Step2 goNextStep={goNextStep} />}
      {step === 3 && <Step2 goNextStep={goNextStep} />}
      {step === 4 && <Step2 goNextStep={goNextStep} />}
    </div>
  );
};

export default Index;
