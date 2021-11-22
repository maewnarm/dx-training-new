import { FC, useState, useEffect } from "react"

interface DropdownProps {
    itemArray: string[] //required
    setSelectFunction: React.Dispatch<React.SetStateAction<string>> //opitonal
}

const Dropdown: FC<DropdownProps> = (props) => {
    const [onMenu, setOnMenu] = useState(false)

    function toggleDropdown(e: React.MouseEvent) {
        e.currentTarget.classList.toggle("is-active")
    }

    function toggleDropdownItem(e: React.MouseEvent, index: number) {
        const items = document.querySelectorAll(`.dropdown-item`)
        items.forEach((item, idx) => {
            item.classList.toggle("is-active", false)
        })
        e.currentTarget.classList.toggle("is-active", true)
        props.setSelectFunction(e.currentTarget.innerHTML)
    }

    return (
        <div className="component-dropdown">
            <div className="dropdown" onClick={(e) => toggleDropdown(e)} onBlur={(e) => !onMenu && e.currentTarget.classList.toggle("is-active", false)}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown plant</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-double-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu" onMouseEnter={() => setOnMenu(true)} onMouseLeave={() => setOnMenu(false)}>
                    <div className="dropdown-content">
                        {props.itemArray.map((item, idx) => {
                            return (
                                <a key={idx} className={`dropdown-item ${type} item-${idx + 1}`} onClick={(e) => toggleDropdownItem(e, idx + 1)}>
                                    {item}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown