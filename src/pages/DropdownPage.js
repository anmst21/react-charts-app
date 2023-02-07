import { useState } from "react";
import Dropdown from "../components/Dropdown";
import ReChart from "../components/ReChart";

function DropdownPage({ chartType, options }) {
  const [selectOne, setSelectOne] = useState("Chart One");
  const [selectTwo, setSelectTwo] = useState("Chart Two");
  const [selectOption, setSelectOption] = useState("Select...");

  const optionArray = [
    { name: "LnQ", value: "lnq" },
    { name: "LNage", value: "lnage" },
    { name: "ROE", value: "roe" },
  ];

  const handleSelectOne = (option) => {
    setSelectOne(option.name);
  };
  const handleSelectTwo = (option) => {
    setSelectTwo(option.name);
  };
  const handleSelectOption = (option) => {
    setSelectOption(option.name);
  };

  return (
    <div>
      <div className="flex">
        <div className="flex-row mx-1">
          <Dropdown
            options={optionArray}
            value={selectOption}
            onChange={handleSelectOption}
          />
        </div>
        <div className="flex-row mx-1">
          <Dropdown
            options={options}
            value={selectOne}
            onChange={handleSelectOne}
          />
        </div>
        <div className="flex-row mx-1">
          <Dropdown
            options={options}
            value={selectTwo}
            onChange={handleSelectTwo}
          />
        </div>
      </div>
      <div className="flex-auto">
        <ReChart
          valueOne={selectOne}
          valueTwo={selectTwo}
          data={options}
          option={selectOption}
          chartType={chartType}
        />
      </div>
    </div>
  );
}

export default DropdownPage;
