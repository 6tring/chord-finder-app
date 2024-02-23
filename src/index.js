import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { KeyProvider } from "./contexts/key-context";
import { QualityProvider } from "./contexts/quality-context";
import { ExtensionProvider } from "./contexts/extension-context";
import { BassProvider } from "./contexts/bass-context";
import { ChordProvider } from "./contexts/chord-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <KeyProvider>
      <QualityProvider>
        <ExtensionProvider>
          <BassProvider>
            <ChordProvider>
              <App />
            </ChordProvider>
          </BassProvider>
        </ExtensionProvider>
      </QualityProvider>
    </KeyProvider>
  </React.StrictMode>
);
