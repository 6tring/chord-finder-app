import { React, createContext, useReducer } from "react";
import chordReducer from "../reducers/chord-reducer";

const defaultKeyValue = "C";

export const KeyContext = createContext();
export const KeyProvider = (props) => {
  const [keyValue, dispatch] = useReducer(chordReducer, defaultKeyValue);
  return (
    <KeyContext.Provider value={{ keyValue, dispatch }}>
      {props.children}
    </KeyContext.Provider>
  );
};
