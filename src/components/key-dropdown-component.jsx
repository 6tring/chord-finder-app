import { React, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { KeyContext } from "../contexts/key-context";

const keyButtonStyles = {
  backgroundColor: "#f9454c",
  borderColor: "#f9454c",
  fontFamily: "Lato, sans-serif",
  fontWeight: 400,
  width: "100px",
};

const keyDropdownValues = [
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

const KeyDropdown = (props) => {
  const { keyValue, dispatch } = useContext(KeyContext);
  return (
    <Dropdown>
      <Dropdown.Toggle style={keyButtonStyles}>{keyValue}</Dropdown.Toggle>
      <Dropdown.Menu className="scrollable-menu">
        {keyDropdownValues.map((value) => {
          return (
            <Dropdown.Item
              as="button"
              key={value}
              value={value}
              onClick={(event) => {
                dispatch({ type: "KEY", keyValue: value });
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

export default KeyDropdown;
