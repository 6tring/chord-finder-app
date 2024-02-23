import { React, createContext, useState } from "react";

const defaultExtensionValue = "Extension";

export const ExtensionContext = createContext();
export const ExtensionProvider = (props) => {
  const [extensionValue, setExtensionValue] = useState(defaultExtensionValue);
  return (
    <ExtensionContext.Provider value={{extensionValue, setExtensionValue}}>
      {props.children}
    </ExtensionContext.Provider>
  );
};
