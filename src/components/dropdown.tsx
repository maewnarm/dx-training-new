import { FC, useState } from "react";

interface DropdownProps {
  buttonText: string;
  identifier: string;
  itemArray: string[]; //required
  selectValue: string;
  setSelectFunction: React.Dispatch<React.SetStateAction<string>>;
  isDisabled: boolean;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const [onMenu, setOnMenu] = useState(false);

  function toggleDropdown(identifier: string) {
    // e.currentTarget.classList.toggle("is-active");
    const button = document.querySelector(`.dropdown.${identifier}`);
    button?.classList.toggle("is-active");
  }

  function toggleDropdownItem(
    e: React.MouseEvent,
    index: number,
    identifier: string
  ) {
    const items = document.querySelectorAll(`.dropdown-item.${identifier}`);
    items.forEach((item, idx) => {
      item.classList.toggle("is-active", false);
    });
    e.currentTarget.classList.toggle("is-active", true);
    const button = document.querySelector(`.button.${identifier}`);
    button?.classList.toggle("is-info", true);
    button?.classList.toggle("is-danger", false);
    props.setSelectFunction(e.currentTarget.innerHTML);
  }

  return (
    <div className="component-dropdown">
      <div
        className={`dropdown ${props.identifier}`}
        onBlur={(e) =>
          !onMenu && e.currentTarget.classList.toggle("is-active", false)
        }
      >
        <div className="dropdown-trigger">
          <button
            className={`button ${props.identifier} is-danger is-outlined`}
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            disabled={props.isDisabled}
            onClick={() => toggleDropdown(props.identifier)}
          >
            <span>
              {props.selectValue === "" ? props.buttonText : props.selectValue}
            </span>
            <span className="icon is-small">
              <i className="fas fa-angle-double-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          className="dropdown-menu"
          id="dropdown-menu"
          role="menu"
          onMouseEnter={() => setOnMenu(true)}
          onMouseLeave={() => setOnMenu(false)}
        >
          <div className="dropdown-content">
            {props.itemArray.map((item, idx) => {
              return (
                <a
                  key={idx}
                  className={`dropdown-item ${props.identifier} item-${
                    idx + 1
                  }`}
                  onClick={(e) =>
                    toggleDropdownItem(e, idx + 1, props.identifier)
                  }
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
