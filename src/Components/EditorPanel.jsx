import MainContext from "@/Utils/MainContext";
import { useContext, useEffect, useState } from "react";
import initSqlJs from "sql.js";
import { dumpData } from "../../public/dumpData";
import { dumpData as queryData } from "../../public/dumpData";
import CTAButton from "@/Components/UI/CTA/CTAButton";
import SnackBar, { showSnackBar } from "@/Components/UI/SnackBar";

const EditorPanel = () => {
  const { query, setQueryHistory, setQuery, queryHistory } =
    useContext(MainContext);
  const [snackBarMessage, setsnackBarMessage] = useState({
    snackBarMessage: "",
    isError: false,
  });

  const [db, setDb] = useState(null);

  // const [error, setError] = useState(null);
  // const [execResults, setExecResults] = useState(null);

  const initializeDB = () => {
    initSqlJs({
      // Fetch sql.js wasm file from CDN
      // This way, we don't need to deal with webpack
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    })
      .then((SQL) => setDb(new SQL.Database()))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    initializeDB();
  }, []);

  const runQuery = () => {
    if (query.trim() === "") {
      setsnackBarMessage({
        snackBarMessage: "Oops, that was a Null Query",
        isError: true,
      });
      setTimeout(() => setsnackBarMessage({}), 1000);
      return;
    } else {
      try {
        const results = db.exec(query);
        setQueryHistory((prev) => ({
          ...prev,
          outputData: results,
        }));
        setsnackBarMessage({
          snackBarMessage: "Run Successfully",
          isError: false,
        });
      } catch (err) {
        setsnackBarMessage({ snackBarMessage: err.toString(), isError: true });
      }
    }

    if (!queryHistory.history.includes(query)) {
      setQueryHistory((prev) => ({
        ...prev,
        history: [...prev.history, query],
      }));
    }

    setTimeout(() => setsnackBarMessage({}), 1000);
  };

  const saveQuery = () => {
    if (query.trim() === "") {
      setsnackBarMessage({
        snackBarMessage: "Query can't be null",
        isError: true,
      });
      setTimeout(() => setsnackBarMessage({}), 1000);
      return;
    }

    if (!queryHistory.saved.includes(query)) {
      setQueryHistory((prev) => ({
        ...prev,
        saved: [...prev.saved, query],
      }));
    }

    setsnackBarMessage({
      snackBarMessage: "Saved",
      isError: false,
    });
    setTimeout(() => setsnackBarMessage({}), 1000);
  };

  const clearQuery = () => {
    setQuery("");
    setQueryHistory((prev) => ({
      ...prev,
      outputData: [],
    }));
    initializeDB();
    setsnackBarMessage({
      snackBarMessage: "New Query Created",
      isError: false,
    });
    setTimeout(() => setsnackBarMessage({}), 1000);
  };

  const cleanCode = () => {
    setQuery("");
    setsnackBarMessage({
      snackBarMessage: "Cleared",
      isError: false,
    });
    setTimeout(() => setsnackBarMessage({}), 1000);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="btn primary-btn p-2">
        <div onClick={() => runQuery()}>
          <CTAButton text={"RUN"} deactivate={true} color="light" />
        </div>
      </div>
      <div className="btn secondary-btn p-2">
        <div onClick={() => saveQuery()}>
          <CTAButton text={"SAVE"} deactivate={true} />
        </div>
      </div>
      <div className="btn alert-btn p-2">
        <div onClick={() => cleanCode()}>
          <CTAButton text={"Clear Code"} deactivate={true} />
        </div>
      </div>
      <div className="btn alert-btn p-2">
        <div onClick={() => clearQuery()}>
          <CTAButton text={"New Query"} deactivate={true} />
        </div>
      </div>
      {snackBarMessage?.snackBarMessage?.length > 0 && (
        <SnackBar
          msg={snackBarMessage?.snackBarMessage}
          isError={snackBarMessage?.isError}
        />
      )}
    </div>
  );
};

export default EditorPanel;
