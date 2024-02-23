import { React, createContext, useReducer } from "react";
import chordReducer from "../reducers/chord-reducer";

const defaultBassValue = "Bass";

export const BassContext = createContext();
export const BassProvider = (props) => {
  const [bassValue, dispatch] = useReducer(chordReducer, defaultBassValue);
  return (
    <BassContext.Provider value={{ bassValue, dispatch }}>
      {props.children}
    </BassContext.Provider>
  );
};
