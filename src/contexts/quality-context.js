import { React, createContext, useState } from "react";

const defaultQualityValue = "Quality";

export const QualityContext = createContext();
export const QualityProvider = (props) => {
  const [qualityValue, setQualityValue] = useState(defaultQualityValue);
  return (
    <QualityContext.Provider value={{qualityValue, setQualityValue}}>
      {props.children}
    </QualityContext.Provider>
  );
};
