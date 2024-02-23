import { React, createContext, useReducer } from "react";
import chordReducer from "../reducers/chord-reducer";

const defaultExtensionValue = "Extension";

export const ExtensionContext = createContext();
export const ExtensionProvider = (props) => {
  const [extensionValue, dispatch] = useReducer(chordReducer, defaultExtensionValue);
  return (
    <ExtensionContext.Provider value={{extensionValue, dispatch}}>
      {props.children}
    </ExtensionContext.Provider>
  );
};
