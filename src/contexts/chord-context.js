import { React, useContext, createContext, useState, useEffect } from "react";
import { KeyContext } from "./key-context";
import { QualityContext } from "./quality-context";
import { ExtensionContext } from "./extension-context";
import { BassContext } from "./bass-context";

const defaultChordValue = "C";

export const ChordContext = createContext();

export const ChordProvider = (props) => {
  const { keyValue } = useContext(KeyContext);
  const { qualityValue } = useContext(QualityContext);
  const { extensionValue } = useContext(ExtensionContext);
  const { bassValue } = useContext(BassContext);

  const apiKeyValue = keyValue;
  const apiQualityValue = qualityValue === "Quality" ? "" : qualityValue;
  const apiExtensionValue =
    extensionValue === "Extension" || extensionValue === "No Extension"
      ? ""
      : extensionValue;
  const apiBassValue =
    bassValue === "Bass" || bassValue === "No Bass" ? "," : `/${bassValue}`;

  const [chordValue, setChordValue] = useState(defaultChordValue);
  useEffect(() => {
    setChordValue(`${apiKeyValue},${apiQualityValue},${apiExtensionValue}${apiBassValue}`);
  }, [
    apiKeyValue,
    apiQualityValue,
    apiExtensionValue,
    apiBassValue,
  ]);

  return (
    <ChordContext.Provider value={{ chordValue, setChordValue }}>
      {props.children}
    </ChordContext.Provider>
  );
};
