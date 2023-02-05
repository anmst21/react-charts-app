import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import ReChart from "../components/ReChart";
import axios from "axios";

function DropdownPage() {
  const [options, setOptions] = useState([]);
  const [selectOne, setSelectOne] = useState("Chart One");
  const [selectTwo, setSelectTwo] = useState("Chart Two");
  const [selectOption, setSelectOption] = useState("Select...");
  console.log(options);

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get("http://localhost:4000/options");
  //     setOptions(result.data);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://charts-db-default-rtdb.europe-west1.firebasedatabase.app/options.json"
      );
      setOptions(result.data);
    };
    fetchData();
  }, []);

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
        />
      </div>
    </div>
  );
}

export default DropdownPage;
