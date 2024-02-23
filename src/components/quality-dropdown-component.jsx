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
  {
    id: 1,
    value: "Maj",
  },
  {
    id: 2,
    value: "Min",
  },
  {
    id: 3,
    value: "Aug",
  },
  {
    id: 4,
    value: "Dim",
  },
  {
    id: 5,
    value: "Maj7",
  },
  {
    id: 6,
    value: "Min7",
  },
  {
    id: 7,
    value: "7",
  },
  {
    id: 8,
    value: "Dim7",
  },
  {
    id: 9,
    value: "Min/Maj7",
  },
  {
    id: 10,
    value: "Min7b5",
  },
  {
    id: 11,
    value: "Sus2",
  },
  {
    id: 12,
    value: "Sus4",
  },
  {
    id: 13,
    value: "6",
  },
  {
    id: 14,
    value: "6/9",
  },
  {
    id: 15,
    value: "9",
  },
  {
    id: 16,
    value: "11",
  },
  {
    id: 17,
    value: "13",
  },
];

const QualityDropdown = (props) => {
  const { qualityValue, dispatch } = useContext(QualityContext);
  return (
    <Dropdown>
      <Dropdown.Toggle style={qualityButtonStyles}>
        {qualityValue}
      </Dropdown.Toggle>
      <Dropdown.Menu className="scrollable-menu">
        {qualityDropdownValues.map((data) => {
          return (
            <Dropdown.Item
              as="button"
              key={data.id}
              value={data.value}
              onClick={(event) => {
                dispatch({ type: "QUALITY", qualityValue: data.value })
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

export default QualityDropdown;
