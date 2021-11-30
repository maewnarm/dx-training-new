import React, { useEffect, useState } from "react";
import Selected from "./selected";
import Dropdown from "@/components/dropdown";
import { useEffectDidMount } from "@/hooks/useEffectDidMount";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  setDropdownValue,
  setLineValue,
  countValue
} from "@/app/features/dropdownSlice";

const plantsArray = ["SRG", "WGR", "BPK"];
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
];
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
];

const About = () => {
  const dispatch = useAppDispatch();
  const countNumber = useAppSelector(countValue)
  const [selectedPlant, setSelectedPlant] = useState("");
  const [selectedLine, setSelectedLine] = useState("");
  const [selectedMachine, setSelectedMachine] = useState("");
  const [filteredLine, setFilteredLine] = useState<string[]>([]);
  const [filteredMachine, setFilteredMachine] = useState<string[]>([]);
  const [isLineDisabled, setIsLineDisabled] = useState(true);
  const [isMachineDisabled, setIsMachineDisabled] = useState(true);

  function clearSelected(identifiers: string[]) {
    identifiers.forEach((identifier, index) => {
      let items = document.querySelectorAll(`.dropdown-item.${identifier}`);
      items.forEach((item, idx) => {
        item.classList.toggle("is-active", false);
      });
      let buttons = document.querySelectorAll(`.button.${identifier}`);
      buttons.forEach((button) => {
        button.classList.toggle("is-danger", true);
        button.classList.toggle("is-info", false);
      });
    });
  }

  useEffectDidMount(() => {
    console.log("plant is changed");
    setSelectedLine("");
    setSelectedMachine("");
    setIsLineDisabled(false);
    setIsMachineDisabled(true);
    clearSelected(["line", "machine"]);
    let filtered: string[] = [];
    linesArray.forEach((item) => {
      if (item.plant === selectedPlant) {
        filtered.push(item.line);
      }
    });
    setFilteredLine(filtered);
    dispatch(setDropdownValue(selectedPlant));
  }, [selectedPlant]);

  useEffect(() => {
    /*...
    ...*/
    return () => {
      console.log("out of page")
      dispatch(setDropdownValue(""));
    };
  }, []);

  useEffectDidMount(() => {
    console.log("line is changed");
    setSelectedMachine("");
    if (selectedLine !== "") {
      setIsMachineDisabled(false);
    }
    clearSelected(["machine"]);
    let filtered: string[] = [];
    machineArray.forEach((item) => {
      if (item.line === selectedLine) {
        filtered.push(item.machine);
      }
    });
    setFilteredMachine(filtered);
    dispatch(setLineValue(selectedLine));
  }, [selectedLine]);

  return (
    <div className="about">
      <div className="about__text">
        <h1>About :</h1>
        <p>Plant : {selectedPlant}</p>
        <p>Line : {selectedLine}</p>
        <p>Machine : {selectedMachine}</p>
        <Selected
          selectedValue={`Plant : ${selectedPlant}, Line : ${selectedLine}, Machine : ${selectedMachine}`}
        />
        <p>Count from Informations : </p>
        <p>{countNumber}</p>
      </div>
      <div className="about__dropdown">
        {/* plant dropdown */}
        <Dropdown
          buttonText="choose plant"
          identifier="plant"
          itemArray={plantsArray}
          selectValue={selectedPlant}
          setSelectFunction={setSelectedPlant}
          isDisabled={false}
        />
        {/* line dropdown */}
        <Dropdown
          buttonText="choose line"
          identifier="line"
          itemArray={filteredLine}
          selectValue={selectedLine}
          setSelectFunction={setSelectedLine}
          isDisabled={isLineDisabled}
        />
        {/* machine dropdown */}
        <Dropdown
          buttonText="choose machine"
          identifier="machine"
          itemArray={filteredMachine}
          selectValue={selectedMachine}
          setSelectFunction={setSelectedMachine}
          isDisabled={isMachineDisabled}
        />
      </div>
    </div>
  );
};

export default About;
