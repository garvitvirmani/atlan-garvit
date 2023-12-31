import MainContext from "@/Utils/MainContext";
import { useContext, useState } from "react";
// import MainContext from "../../MainContext";
// import ColumnDetails from "./ColumnDetails";
import { CSVLink } from "react-csv";
import ColumnDetails from "./ColumnDetails";
import Table from "@/Components/UI/Table/Table";
import CTAButton from "@/Components/UI/CTA/CTAButton";

const Output = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory } = useContext(MainContext);

  const exportData = () => {
    console.log("Data to be exported");
  };

  const ResultTable = ({ columns, values }) => {
    return (
      <div className="query-table">
        <table>
          <thead>
            <tr>
              {columns.map((columnName) => (
                <td key={columnName}>{columnName}</td>
              ))}
            </tr>
          </thead>

          <tbody>
            {values.map(
              (
                row, // values is an array of arrays representing the results of the query
                rowIndex
              ) => (
                <tr key={rowIndex}>
                  {row.map((value, cellIndex) => (
                    <td key={cellIndex}>{value}</td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="query-results w-[98%] dark:text-white">
      {queryHistory?.outputData?.length > 0 ? (
        <div className="flex flex-col gap-[10px]">
          <div className="tab-bar">
            <span
              className={`tabs ${tab === 0 ? "active" : ""} cursor-pointer`}
              onClick={() => setTab(0)}
            >
              Output
            </span>
            <span
              className={`tabs ${tab === 1 ? "active" : ""} cursor-pointer`}
              onClick={() => setTab(1)}
            >
              Schema
            </span>
          </div>
          <div className="query-details">
            <p className="text-2">
              <span>
                {tab === 0
                  ? queryHistory.outputData.length
                  : Object.keys(queryHistory?.outputData?.[0])?.length}
              </span>{" "}
              rows in Set
              <span style={{ fontSize: "0.9rem" }} className="text-1">
                {" "}
                (0.03sec)
              </span>
            </p>
            <div className="export-btn">
              <CSVLink
                data={queryHistory?.outputData}
                filename={"dataOutput.csv"}
              >
                <div onClick={exportData} className="w-[120px]">
                  <CTAButton text="export" color="light" deactivate />
                </div>
              </CSVLink>
            </div>
          </div>
          {tab === 0
            ? queryHistory?.outputData.map((execResult, rIndex) => (
                <ResultTable
                  key={rIndex}
                  columns={execResult.columns}
                  values={execResult.values}
                />
              ))
            : queryHistory?.outputData.map((execResult, rIndex) => (
                <ColumnDetails result={execResult?.columns} key={rIndex} />
              ))}
        </div>
      ) : (
        <div className="placeholder-text dark:text-white">
          <p>Output will appear here ..</p>
        </div>
      )}
    </div>
  );
};

export default Output;
