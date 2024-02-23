import { React, createContext, useState } from "react";

const defaultKeyValue = "C";

export const KeyContext = createContext();
export const KeyProvider = (props) => {
  const [keyValue, setKeyValue] = useState(defaultKeyValue);
  return (
    <KeyContext.Provider value={{ keyValue, setKeyValue }}>
      {props.children}
    </KeyContext.Provider>
  );
};
