import { useState } from "react";
import Dropdown from "../components/Dropdown";
import ReChart from "../components/ReChart";

const options = [
  {
    name: "Year 1",
    data: [
      { label: "January", value: 10 },
      { label: "February", value: 20 },
    ],
  },
  {
    name: "Year 2",
    data: [
      { label: "January", value: 10 },
      { label: "February", value: 20 },
      { label: "March", value: 30 },
    ],
  },
  {
    name: "Year 3",
    data: [
      { label: "January", value: 10 },
      { label: "February", value: 20 },
      { label: "March", value: 30 },
      { label: "April", value: 40 },
      { label: "May", value: 50 },
      { label: "June", value: 60 },
      { label: "July", value: 70 },
      { label: "August", value: 80 },
      { label: "September", value: 90 },
      { label: "October", value: 100 },
    ],
  },
  {
    name: "Year 4",
    data: [
      { label: "January", value: 10 },
      { label: "February", value: 20 },
      { label: "March", value: 30 },
      { label: "April", value: 40 },
      { label: "May", value: 50 },
      { label: "June", value: 60 },
      { label: "July", value: 70 },
      { label: "August", value: 80 },
      { label: "September", value: 90 },
      { label: "October", value: 100 },
      { label: "November", value: 110 },
      { label: "December", value: 120 },
    ],
  },
];

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option.name);
  };

  return (
    <div>
      <div className="flex">
        <Dropdown options={options} value={selection} onChange={handleSelect} />
      </div>
      <div>
        <ReChart value={selection} data={options} />
      </div>
    </div>
  );
}

export default DropdownPage;
