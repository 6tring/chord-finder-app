import { React, useContext } from "react";
import { ChordContext } from "../contexts/chord-context";
import { Row } from "react-bootstrap";

const chordStyles = {
  boxShadow: "5px 6px 10px 2px #C0C0C0",
  height: "300px",
  width: "600px",
  backgroundColor: "#ffffff",
  outline: "1px solid #000000",
};

const ChordDiagram = (props) => {
  const { chordValue } = useContext(ChordContext);
  console.log(chordValue);
  const uberchordValue = `https://api.uberchord.com/v1/embed/chords?nameLike=${chordValue}#autosize`;

  return (
    <Row className="text-center d-flex justify-content-center">
      <iframe
        src={uberchordValue}
        crossOrigin="anonymous"
        style={chordStyles}
        alt="Chord Diagram"
        title="Chord Diagram"
        className="pt-3 pe-1"
      />
    </Row>
  );
};

export default ChordDiagram;
