import { React, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { QualityContext } from "../contexts/quality-context";

export const qualityButtonStyles = {
  backgroundColor: "#fda917",
  borderColor: "#fda917",
  fontFamily: "Lato, sans-serif",
  fontWeight: 400,
  width: "100px",
};

const qualityDropdownValues = [
  "Maj",
  "Min",
  "Aug",
  "Dim",
  "Maj7",
  "Min7",
  "7",
  "Dim7",
  "Min/Maj7",
  "Min7b5",
  "Sus2",
  "Sus4",
  "6",
  "6/9",
  "9",
  "11",
  "13"
];

const QualityDropdown = (props) => {
  const { qualityValue, dispatch } = useContext(QualityContext);
  return (
    <Dropdown>
      <Dropdown.Toggle style={qualityButtonStyles}>
        {qualityValue}
      </Dropdown.Toggle>
      <Dropdown.Menu className="scrollable-menu">
        {qualityDropdownValues.map((value) => {
          return (
            <Dropdown.Item
              as="button"
              key={value}
              value={value}
              onClick={(event) => {
                dispatch({ type: "QUALITY", qualityValue: value });
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

export default QualityDropdown;
