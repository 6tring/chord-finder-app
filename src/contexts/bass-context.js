import { React, createContext, useState } from "react";

const defaultBassValue = "Bass";

export const BassContext = createContext();
export const BassProvider = (props) => {
  const [bassValue, setBassValue] = useState(defaultBassValue);
  return (
    <BassContext.Provider value={{ bassValue, setBassValue }}>
      {props.children}
    </BassContext.Provider>
  );
};
