import React, { useContext, useEffect, useState } from "react";
const RecordContext = React.createContext();

export const RecordProvider = ({ data, children }) => {
  const [painScoreBefore, setPainScoreBefore] = useState(0);

  useEffect(() => {
    console.log("painScoreBefore", painScoreBefore);
  }, [painScoreBefore]);

  return (
    <RecordContext.Provider value={{ painScoreBefore, setPainScoreBefore }}>
      {children}
    </RecordContext.Provider>
  );
};

export const usePainScoreBefore = () => {
  const { painScoreBefore } = useContext(RecordContext);
  return painScoreBefore;
};

export const useSetPainScoreBefore = () => {
  const { setPainScoreBefore } = useContext(RecordContext);
  return setPainScoreBefore;
};

export default RecordProvider;
