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
  {
    id: 1,
    value: "C",
  },
  {
    id: 2,
    value: "Db",
  },
  {
    id: 3,
    value: "D",
  },
  {
    id: 4,
    value: "Eb",
  },
  {
    id: 5,
    value: "E",
  },
  {
    id: 6,
    value: "F",
  },
  {
    id: 7,
    value: "F#",
  },
  {
    id: 8,
    value: "G",
  },
  {
    id: 9,
    value: "Ab",
  },
  {
    id: 10,
    value: "A",
  },
  {
    id: 11,
    value: "Bb",
  },
  {
    id: 12,
    value: "B",
  },
];

const KeyDropdown = (props) => {
  const { keyValue, dispatch } = useContext(KeyContext);
  return (
    <Dropdown>
      <Dropdown.Toggle style={keyButtonStyles}>{keyValue}</Dropdown.Toggle>
      <Dropdown.Menu className="scrollable-menu">
        {keyDropdownValues.map((data) => {
          return (
            <Dropdown.Item
              as="button"
              key={data.id}
              value={data.value}
              onClick={(event) => {
                dispatch({ type: "KEY", keyValue: data.value })
              }}
            >
              {data.value}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default KeyDropdown;
