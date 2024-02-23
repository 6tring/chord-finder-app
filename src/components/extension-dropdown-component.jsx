import { React, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { ExtensionContext } from "../contexts/extension-context";

const extensionButtonStyles = {
  backgroundColor: "#5fb154",
  borderColor: "#5fb154",
  fontFamily: "Lato, sans-serif",
  fontWeight: 400,
  width: "100px",
};

const extensionDropdownValues = [
  {
    id: 1,
    value: "No Extension",
  },
  {
    id: 2,
    value: "b9",
  },
  {
    id: 3,
    value: "9",
  },
  {
    id: 4,
    value: "#9",
  },
  {
    id: 5,
    value: "b11",
  },
  {
    id: 6,
    value: "11",
  },
  {
    id: 7,
    value: "#11",
  },
  {
    id: 8,
    value: "b13",
  },
  {
    id: 9,
    value: "13",
  },
  {
    id: 10,
    value: "#13",
  },
];

const ExtensionDropdown = (props) => {
  const { extensionValue, dispatch } = useContext(ExtensionContext);
  return (
    <Dropdown>
      <Dropdown.Toggle style={extensionButtonStyles}>
        {extensionValue === "No Extension" ? "Extension" : extensionValue}
      </Dropdown.Toggle>
      <Dropdown.Menu className="scrollable-menu">
        {extensionDropdownValues.map((data) => {
          return (
            <Dropdown.Item
              as="button"
              key={data.id}
              value={data.value}
              onClick={(event) => {
                dispatch({ type: "EXTENSION", extensionValue: data.value })
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

export default ExtensionDropdown;
