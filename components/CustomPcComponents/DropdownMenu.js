import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import classes from "./DropdownMenu.module.css";
function Dropdown({ selected, setSelected, options }) {
  const [isActive, setIsActive] = useState(false);
  // const options = ["React", "Vue", "Angular"];
  return (
    <div className={classes.dropdown}>
      <div
        className={classes.dropdownbtn}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
        <span>
          <FaAngleDown />
        </span>
      </div>
      {isActive && (
        <div className={classes.dropdowncontent}>
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className={classes.dropdownitem}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
