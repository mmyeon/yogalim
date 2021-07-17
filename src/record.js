import React, { useContext, useState } from "react";
const RecordContext = React.createContext();

export const RecordProvider = ({ data, children }) => {
  const [painScoreBefore, setPainScoreBefore] = useState(0);
  const [painScoreAfter, setPainScoreAfter] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <RecordContext.Provider
      value={{
        painScoreBefore,
        setPainScoreBefore,
        painScoreAfter,
        setPainScoreAfter,
        step,
        setStep,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

export const usePainScoreBefore = () => {
  const { painScoreBefore } = useContext(RecordContext);
  return painScoreBefore;
};
export const usePainScoreAfter = () => {
  const { painScoreAfter } = useContext(RecordContext);
  return painScoreAfter;
};

export const useSetPainScoreBefore = () => {
  const { setPainScoreBefore } = useContext(RecordContext);
  return setPainScoreBefore;
};
export const useSetPainScoreAfter = () => {
  const { setPainScoreAfter } = useContext(RecordContext);
  return setPainScoreAfter;
};

export const useStep = () => {
  const { step } = useContext(RecordContext);
  return step;
};

export const useSetStep = () => {
  const { setStep } = useContext(RecordContext);
  return setStep;
};

export default RecordProvider;
