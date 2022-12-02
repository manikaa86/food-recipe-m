import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";

import "./Dropdown.css";

const Icon = () => {
  return (
    <svg height="20" width="20">
      <path d="directory"></path>
    </svg>
  );
};

const Dropdown = ({ placeHolder }) => {
  const getDisplay = () => {
    return placeHolder;
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <div className="dropdown-menu">
            {options.map((option)) => (
                <div key ={option.value} className = "dropdown-item"> 
                    {option.label}
            )}
        </div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
       ))}
      </div>
    </div>
  );
};

export default Dropdown;
