import { React, createContext, useReducer } from "react";
import chordReducer from "../reducers/chord-reducer";


const defaultQualityValue = "Quality";

export const QualityContext = createContext();
export const QualityProvider = (props) => {
  const [qualityValue, dispatch] = useReducer(chordReducer, defaultQualityValue);
  return (
    <QualityContext.Provider value={{qualityValue, dispatch}}>
      {props.children}
    </QualityContext.Provider>
  );
};
