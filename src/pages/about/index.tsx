import { useState } from "react"
import Selected from "./selected"

const plantsArray = ["SRG","WGR","BPK"]
const linesArray = [
    {plant: "SRG",line:"SRG-1"},
    {plant: "SRG",line:"SRG-2"},
    {plant: "SRG",line:"SRG-3"},
    {plant: "SRG",line:"SRG-4"},
    {plant: "SRG",line:"SRG-5"},
    {plant: "WGR",line:"WGR-1"},
    {plant: "WGR",line:"WGR-2"},
    {plant: "WGR",line:"WGR-3"},
    {plant: "WGR",line:"WGR-4"},
    {plant: "WGR",line:"WGR-5"},
    {plant: "BPK",line:"BPK-1"},
    {plant: "BPK",line:"BPK-2"},
    {plant: "BPK",line:"BPK-3"},
    {plant: "BPK",line:"BPK-4"},
    {plant: "BPK",line:"BPK-5"},
]
const machineArray = [
    {line: "SRG-1",machine:"T6ZZM00001"},
    {line: "SRG-1",machine:"T6ZZM00002"},
    {line: "SRG-1",machine:"T6ZZM00003"},
    {line: "SRG-2",machine:"T6ZZM00004"},
    {line: "SRG-2",machine:"T6ZZM00005"},
    {line: "SRG-2",machine:"T6ZZM00006"},
    {line: "SRG-3",machine:"T6ZZM00007"},
    {line: "SRG-3",machine:"T6ZZM00008"},
    {line: "SRG-3",machine:"T6ZZM00009"},
    {line: "SRG-4",machine:"T6ZZM00010"},
    {line: "SRG-4",machine:"T6ZZM00011"},
    {line: "SRG-4",machine:"T6ZZM00012"},
    {line: "SRG-5",machine:"T6ZZM00013"},
    {line: "SRG-5",machine:"T6ZZM00014"},
    {line: "SRG-5",machine:"T6ZZM00015"},
    {line: "WGR-1",machine:"T6ZZM00016"},
    {line: "WGR-1",machine:"T6ZZM00017"},
    {line: "WGR-1",machine:"T6ZZM00018"},
    {line: "WGR-2",machine:"T6ZZM00019"},
    {line: "WGR-2",machine:"T6ZZM00020"},
    {line: "WGR-2",machine:"T6ZZM00021"},
    {line: "WGR-3",machine:"T6ZZM00022"},
    {line: "WGR-3",machine:"T6ZZM00023"},
    {line: "WGR-3",machine:"T6ZZM00024"},
    {line: "WGR-4",machine:"T6ZZM00025"},
    {line: "WGR-4",machine:"T6ZZM00026"},
    {line: "WGR-4",machine:"T6ZZM00027"},
    {line: "WGR-5",machine:"T6ZZM00028"},
    {line: "WGR-5",machine:"T6ZZM00029"},
    {line: "WGR-5",machine:"T6ZZM00030"},
    {line: "BPK-1",machine:"T6ZZM00031"},
    {line: "BPK-1",machine:"T6ZZM00032"},
    {line: "BPK-1",machine:"T6ZZM00033"},
    {line: "BPK-2",machine:"T6ZZM00034"},
    {line: "BPK-2",machine:"T6ZZM00035"},
    {line: "BPK-2",machine:"T6ZZM00036"},
    {line: "BPK-3",machine:"T6ZZM00037"},
    {line: "BPK-3",machine:"T6ZZM00038"},
    {line: "BPK-3",machine:"T6ZZM00039"},
    {line: "BPK-4",machine:"T6ZZM00040"},
    {line: "BPK-4",machine:"T6ZZM00041"},
    {line: "BPK-4",machine:"T6ZZM00042"},
    {line: "BPK-5",machine:"T6ZZM00043"},
    {line: "BPK-5",machine:"T6ZZM00044"},
    {line: "BPK-5",machine:"T6ZZM00045"},
]
//example
//linesArray[0] = {plant: "SRG",line:"SRG-1"}
//linesArray[0]["plant"] = "SRG"
//linesArray[0].plant = "SRG"
//linesArray[1]["line"] = "SRG-2"

const About = () => {
    const [selectedItem, setSelectedItem] = useState("")
    const arrayItems: string[] = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

    function toggleDropdown(index: string) {
        // console.log(index)
        const dropdown = document.querySelector('.dropdown')
        if (dropdown) { //null,undefined,NaN === false
            dropdown.classList.toggle("is-active")
        }
    }

    function toggleDropdownItem(e: React.MouseEvent, index: number) {
        // const item = document.querySelector(`.dropdown-item.item-${index}`)
        // console.log(item)
        // if (item) {
        //     item.classList.toggle("is-active")
        // }

        const items = document.querySelectorAll(`.dropdown-item`)
        // console.log(items) //arrays
        items.forEach((item, idx) => {
            let classItem = item.classList.toString().split(" ")
            if (classItem.includes(`item-${index}`)) {
                item.classList.toggle("is-active", true)
                setSelectedItem(e.currentTarget.innerHTML)
            } else {
                item.classList.toggle("is-active", false)
            }
        })
    }

    return (
        <div className="about">
            <h1>About : {selectedItem}</h1>
            <button className="button is-dark">Test</button>
            <div className="dropdown" onClick={() => toggleDropdown("123")}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown button</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-double-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {/* <a className="dropdown-item item-1" onClick={(e) => toggleDropdownItem(e, 1)}>
                            Item 1
                        </a>
                        <a className="dropdown-item item-2" onClick={(e) => toggleDropdownItem(e, 2)}>
                            Item 2
                        </a>
                        <a className="dropdown-item item-3" onClick={(e) => toggleDropdownItem(e, 3)}>
                            Item 3
                        </a>
                        <a className="dropdown-item item-4" onClick={(e) => toggleDropdownItem(e, 4)}>
                            Item 4
                        </a>
                        <a className="dropdown-item item-5" onClick={(e) => toggleDropdownItem(e, 5)}>
                            Item 5
                        </a> */}
                        {arrayItems.map((item, idx) => {
                            return (
                                <a key={idx} className={`dropdown-item item-${idx + 1}`} onClick={(e) => toggleDropdownItem(e, idx + 1)}>
                                    {item}
                                </a>
                            )

                        })}
                        {/* {arrayItems.map((item, idx) => (
                            <a key={idx} className={`dropdown-item item-${idx + 1}`} onClick={(e) => toggleDropdownItem(e, idx + 1)}>
                                {item}
                            </a>
                        ))} */}
                    </div>
                </div>
            </div>
            <Selected selectedValue={selectedItem}/>
        </div>
    )
}

export default About