import React, { useContext, useState } from "react";
const RecordContext = React.createContext();

export const RecordProvider = ({ data, children }) => {
  const [beforeScore, setBeforeScore] = useState(0);

  return (
    <RecordContext.Provider value={{ beforeScore, setBeforeScore }}>
      {children}
    </RecordContext.Provider>
  );
};

export const useBeforeScore = () => {
  const { beforeScore } = useContext(RecordContext);
  return beforeScore;
};

export const useSetBeforeScore = () => {
  const { setBeforeScore } = useContext(RecordContext);
  return setBeforeScore;
};

export default RecordProvider;
