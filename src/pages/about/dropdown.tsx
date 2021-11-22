import { Dispatch, FC, SetStateAction } from 'react'

interface dropdownProps {
    initialText: string
    selectedText: string
    setSelectedText: Dispatch<SetStateAction<string>> | null
    selectedItemIndex: number | null
    setSelectedItemIndex: Dispatch<SetStateAction<number|null>> | null
    choicesArray: string[]
}

const Dropdown: FC<dropdownProps> = (props) => {
    Dropdown.defaultProps = {
        initialText: "",
        selectedText: "",
        setSelectedText: null,
        selectedItemIndex: null,
        setSelectedItemIndex: null,
        choicesArray: [],
    }

    function selectDropdownItem(e: React.MouseEvent, index: number) {

    }

    return (
        <div className="my-dropdown">
            <div className="dropdown" onClick={(e) => e.currentTarget.classList.toggle("is-active")}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{props.selectedText === "" ? props.initialText : props.selectedText}</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-double-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {props.choicesArray.map((item, idx) => {
                            let addClass = ""
                            if (props.selectedItemIndex && props.selectedItemIndex === idx) {
                                addClass = "is-active"
                            }
                            return (
                                <a key={idx} className={`dropdown-item item-${idx + 1} ${addClass}`} onClick={(e) => selectDropdownItem(e, idx)}>
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