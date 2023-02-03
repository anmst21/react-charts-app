import Table from "./Table";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <BiUpArrowAlt />
        <BiDownArrowAlt />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <BiUpArrowAlt />
        <BiDownArrowAlt />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <BiUpArrowAlt />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <BiDownArrowAlt />
      </div>
    );
  }
};

export default SortableTable;
