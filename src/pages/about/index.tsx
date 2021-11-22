import React, { useEffect, useState } from "react"
// import Dropdown from "./dropdown"
import Selected from "./selected"
import Dropdown from "../../components/dropdown"

const plantsArray = [
    "SRG",
    "WGR",
    "BPK"
]
const linesArray = [
    { plant: "SRG", line: "SRG-1" },
    { plant: "SRG", line: "SRG-2" },
    { plant: "SRG", line: "SRG-3" },
    { plant: "SRG", line: "SRG-4" },
    { plant: "SRG", line: "SRG-5" },
    { plant: "WGR", line: "WGR-1" },
    { plant: "WGR", line: "WGR-2" },
    { plant: "WGR", line: "WGR-3" },
    { plant: "WGR", line: "WGR-4" },
    { plant: "WGR", line: "WGR-5" },
    { plant: "BPK", line: "BPK-1" },
    { plant: "BPK", line: "BPK-2" },
    { plant: "BPK", line: "BPK-3" },
    { plant: "BPK", line: "BPK-4" },
    { plant: "BPK", line: "BPK-5" },
]
const machineArray = [
    { line: "SRG-1", machine: "T6ZZM00001" },
    { line: "SRG-1", machine: "T6ZZM00002" },
    { line: "SRG-1", machine: "T6ZZM00003" },
    { line: "SRG-2", machine: "T6ZZM00004" },
    { line: "SRG-2", machine: "T6ZZM00005" },
    { line: "SRG-2", machine: "T6ZZM00006" },
    { line: "SRG-3", machine: "T6ZZM00007" },
    { line: "SRG-3", machine: "T6ZZM00008" },
    { line: "SRG-3", machine: "T6ZZM00009" },
    { line: "SRG-4", machine: "T6ZZM00010" },
    { line: "SRG-4", machine: "T6ZZM00011" },
    { line: "SRG-4", machine: "T6ZZM00012" },
    { line: "SRG-5", machine: "T6ZZM00013" },
    { line: "SRG-5", machine: "T6ZZM00014" },
    { line: "SRG-5", machine: "T6ZZM00015" },
    { line: "WGR-1", machine: "T6ZZM00016" },
    { line: "WGR-1", machine: "T6ZZM00017" },
    { line: "WGR-1", machine: "T6ZZM00018" },
    { line: "WGR-2", machine: "T6ZZM00019" },
    { line: "WGR-2", machine: "T6ZZM00020" },
    { line: "WGR-2", machine: "T6ZZM00021" },
    { line: "WGR-3", machine: "T6ZZM00022" },
    { line: "WGR-3", machine: "T6ZZM00023" },
    { line: "WGR-3", machine: "T6ZZM00024" },
    { line: "WGR-4", machine: "T6ZZM00025" },
    { line: "WGR-4", machine: "T6ZZM00026" },
    { line: "WGR-4", machine: "T6ZZM00027" },
    { line: "WGR-5", machine: "T6ZZM00028" },
    { line: "WGR-5", machine: "T6ZZM00029" },
    { line: "WGR-5", machine: "T6ZZM00030" },
    { line: "BPK-1", machine: "T6ZZM00031" },
    { line: "BPK-1", machine: "T6ZZM00032" },
    { line: "BPK-1", machine: "T6ZZM00033" },
    { line: "BPK-2", machine: "T6ZZM00034" },
    { line: "BPK-2", machine: "T6ZZM00035" },
    { line: "BPK-2", machine: "T6ZZM00036" },
    { line: "BPK-3", machine: "T6ZZM00037" },
    { line: "BPK-3", machine: "T6ZZM00038" },
    { line: "BPK-3", machine: "T6ZZM00039" },
    { line: "BPK-4", machine: "T6ZZM00040" },
    { line: "BPK-4", machine: "T6ZZM00041" },
    { line: "BPK-4", machine: "T6ZZM00042" },
    { line: "BPK-5", machine: "T6ZZM00043" },
    { line: "BPK-5", machine: "T6ZZM00044" },
    { line: "BPK-5", machine: "T6ZZM00045" },
]

const About = () => {
    const [selectedPlant, setSelectedPlant] = useState("")
    const [selectedLine, setSelectedLine] = useState("")
    const [selectedMachine, setSelectedMachine] = useState("")
    const [filteredLine, setFilteredLine] = useState<string[]>([])
    const [filteredMachine, setFilteredMachine] = useState<string[]>([])
    const [onMenu, setOnMenu] = useState(false)

    function toggleDropdown(e: React.MouseEvent) {
        e.currentTarget.classList.toggle("is-active")
    }

    function toggleDropdownItem(e: React.MouseEvent, type: string, index: number) {
        const items = document.querySelectorAll(`.dropdown-item.dropdown__${type}`)
        items.forEach((item, idx) => {
            item.classList.toggle("is-active", false)
        })
        e.currentTarget.classList.toggle("is-active", true)
        switch (type) {
            case "plant":
                setSelectedPlant(e.currentTarget.innerHTML)
                break
            case "line":
                setSelectedLine(e.currentTarget.innerHTML)
                break
            case "machine":
                setSelectedMachine(e.currentTarget.innerHTML)
                break
            default:
                console.log("type not match")
        }
    }

    function clearSelected(types: string[]) {
        types.forEach((type, index) => {
            let items = document.querySelectorAll(`.dropdown-item.dropdown__${type}`)
            items.forEach((item, idx) => {
                item.classList.toggle("is-active", false)
            })
        })
    }

    useEffect(() => {
        console.log("plant is changed")
        // setSelectedLine("")
        // setSelectedMachine("")
        // clearSelected(["line", "machine"])
        let filtered: string[] = []
        linesArray.forEach(item => {
            if (item.plant === selectedPlant) {
                filtered.push(item.line)
            } 
        })
        setFilteredLine(filtered)
    }, [selectedPlant])

    useEffect(() => {
        console.log("line is changed")
        // setSelectedMachine("")
        // clearSelected(["machine"])
        let filtered: string[] =[]
        machineArray.forEach(item => {
            if (item.line === selectedLine) {
                filtered.push(item.machine)
            }
        })
        setFilteredMachine(filtered)
    }, [selectedLine])

    return (
        <div className="about">
            <h1>About :</h1>
            <p>Plant : {selectedPlant}</p>
            <p>Line : {selectedLine}</p>
            <p>Machine : {selectedMachine}</p>
            <button className="button is-dark">Test</button>

            {/* plant */}
            <div className="dropdown" onClick={(e) => toggleDropdown(e)} onBlur={(e) => !onMenu && e.currentTarget.classList.toggle("is-active",false)}>
                <div className="dropdown-trigger" >
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown plant</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-double-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu" onMouseEnter={() => setOnMenu(true)} onMouseLeave={() => setOnMenu(false)}>
                    <div className="dropdown-content">
                        {plantsArray.map((item, idx) => {
                            return (
                                <a key={idx} className={`dropdown-item dropdown__plant item-${idx + 1}`} onClick={(e) => toggleDropdownItem(e, "plant", idx + 1)}>
                                    {item}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* line */}
            <div className="dropdown" onClick={(e) => toggleDropdown(e)} onBlur={(e) => !onMenu && e.currentTarget.classList.toggle("is-active",false)}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown line</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-double-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu" onMouseEnter={() => setOnMenu(true)} onMouseLeave={() => setOnMenu(false)}>
                    <div className="dropdown-content">
                        {linesArray.map((item, idx) => {
                            if (item.plant !== selectedPlant) {
                                return
                            }
                            return (
                                <a key={idx} className={`dropdown-item dropdown__line item-${idx + 1}`} onClick={(e) => toggleDropdownItem(e, "line", idx + 1)}>
                                    {item.line}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* machine */}
            <div className="dropdown" onClick={(e) => toggleDropdown(e)} onBlur={(e) => !onMenu && e.currentTarget.classList.toggle("is-active",false)}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown machine</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-double-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu" onMouseEnter={() => setOnMenu(true)} onMouseLeave={() => setOnMenu(false)}>
                    <div className="dropdown-content">
                        {machineArray.map((item, idx) => {
                            if (item.line !== selectedLine) {
                                return
                            }
                            return (
                                <a key={idx} className={`dropdown-item dropdown__machine item-${idx + 1}`} onClick={(e) => toggleDropdownItem(e, "machine", idx + 1)}>
                                    {item.machine}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Selected selectedValue={`Plant : ${selectedPlant}, Line : ${selectedLine}, Machine : ${selectedMachine}`} />
            {/* plant dropdown */}
            <Dropdown itemArray={plantsArray} setSelectFunction={setSelectedPlant} type={"plant"}/>
            {/* line dropdown */}
            <Dropdown itemArray={filteredLine} setSelectFunction={setSelectedLine}/>
            {/* machine dropdown */}
            <Dropdown itemArray={filteredMachine} setSelectFunction={setSelectedMachine}/>





            {/* <Dropdown initialText="Choose plant" selectedText={selectedPlant} setSelectedText={setSelectedPlant} selectedItemIndex={selectedPlantIndex} setSelectedItemIndex={setSelectedPlantIndex} choicesArray={plantsArray}/> */}
        </div>
    )
}

export default About