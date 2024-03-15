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
  "No Extension",
  "b9",
  "9",
  "#9",
  "b11",
  "11",
  "#11",
  "b13",
  "13",
  "#13"
];

const ExtensionDropdown = (props) => {
  const { extensionValue, dispatch } = useContext(ExtensionContext);
  return (
    <Dropdown>
      <Dropdown.Toggle style={extensionButtonStyles}>
        {extensionValue === "No Extension" ? "Extension" : extensionValue}
      </Dropdown.Toggle>
      <Dropdown.Menu className="scrollable-menu">
        {extensionDropdownValues.map((value) => {
          return (
            <Dropdown.Item
              as="button"
              key={value}
              value={value}
              onClick={(event) => {
                dispatch({ type: "EXTENSION", extensionValue: value });
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

export default ExtensionDropdown;
