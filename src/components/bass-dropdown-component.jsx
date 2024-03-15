import { React, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BassContext } from "../contexts/bass-context";

const bassButtonStyles = {
  backgroundColor: "#4c86bf",
  borderColor: "#4c86bf",
  fontFamily: "Lato, sans-serif",
  fontWeight: 400,
  width: "100px",
};

const bassDropdownValues = [
  "No Bass",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "F#",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

const BassDropdown = (props) => {
  const { bassValue, dispatch } = useContext(BassContext);
  return (
    <Dropdown>
      <Dropdown.Toggle style={bassButtonStyles}>
        {bassValue === "No Bass" ? "Bass" : bassValue}
      </Dropdown.Toggle>
      <Dropdown.Menu className="scrollable-menu">
        {bassDropdownValues.map((value) => {
          return (
            <Dropdown.Item
              as="button"
              key={value}
              value={value}
              onClick={(event) => {
                dispatch({ type: "BASS", bassValue: value });
              }}
            >
              {value}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BassDropdown;
