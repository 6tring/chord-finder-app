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
  {
    id: 1,
    value: "No Bass",
  },
  {
    id: 2,
    value: "C",
  },
  {
    id: 3,
    value: "Db",
  },
  {
    id: 4,
    value: "D",
  },
  {
    id: 5,
    value: "Eb",
  },
  {
    id: 6,
    value: "E",
  },
  {
    id: 7,
    value: "F",
  },
  {
    id: 8,
    value: "F#",
  },
  {
    id: 9,
    value: "G",
  },
  {
    id: 10,
    value: "Ab",
  },
  {
    id: 11,
    value: "A",
  },
  {
    id: 12,
    value: "Bb",
  },
  {
    id: 13,
    value: "B",
  },
];

const BassDropdown = (props) => {
  const { bassValue, setBassValue } = useContext(BassContext);
  return (
    <Dropdown>
      <Dropdown.Toggle style={bassButtonStyles}>
        {bassValue === "No Bass" ? "Bass" : bassValue}
      </Dropdown.Toggle>
      <Dropdown.Menu className="scrollable-menu">
        {bassDropdownValues.map((data) => {
          return (
            <Dropdown.Item
              as="button"
              key={data.id}
              value={data.value}
              onClick={(event) => {
                setBassValue(event.target.value);
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

export default BassDropdown;
