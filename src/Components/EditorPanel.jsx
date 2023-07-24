import MainContext from "@/Utils/MainContext";
import { useContext } from "react";

import { dumpData } from "../../public/dumpData";
import { dumpData as queryData } from "../../public/dumpData";
import CTAButton from "@/Components/UI/CTA/CTAButton";
const EditorPanel = () => {
  const { query, setQueryHistory, setQuery } = useContext(MainContext);

  const runQuery = () => {
    if (query.trim() === "") {
      alert(
        "Oops, that was a Null Query. Please type another query, or select from the ones previously saved."
      );
      return;
    }
    if (query === "SELECT * FROM internetData;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: dumpData,
      }));
    } else if (
      query === "SELECT id, first_name, last_name FROM internetData;"
    ) {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData,
      }));
    } else {
      alert("Please try the test query.");
    }
    setQueryHistory((prev) => ({
      ...prev,
      history: [...prev.history, query],
    }));
  };

  const saveQuery = () => {
    if (query.trim() === "") {
      alert("Query can't be null");
      return;
    }

    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
  };

  const clearQuery = () => {
    setQuery("");
  };

  return (
    <div className="flex gap-6">
      <div className="btn primary-btn">
        <div onClick={() => runQuery()}>
          <CTAButton text={"RUN"} deactivate={true} color="light" />
        </div>
      </div>
      <div className="btn secondary-btn">
        <div onClick={() => saveQuery()}>
          <CTAButton text={"SAVE"} deactivate={true} />
        </div>
      </div>
      <div className="btn alert-btn">
        <div onClick={() => clearQuery()}>
          <CTAButton text={"CLEAR"} deactivate={true} />
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
