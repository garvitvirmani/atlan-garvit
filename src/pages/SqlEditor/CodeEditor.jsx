import { useContext, useEffect, useMemo, useState } from "react";

import EditorPanel from "./EditorPanel";
import Editor from "@monaco-editor/react";
import MainContext from "@/Utils/MainContext";

const CodeEditor = () => {
  const [darkMode, setdarkMode] = useState(true);

  const [query, setQuery] = useState("SELECT * FROM internetData;");
  const [queryHistory, setQueryHistory] = useState({
    saved: [
      "SELECT * FROM internetData;",
      "SELECT id, first_name, last_name FROM internetData;",
    ],
    history: ["SELECT * FROM internetData;"],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryHistory, setQueryHistory }),
    [query, queryHistory]
  );

  const options = {
    autoIndent: "full",
    contextmenu: true,
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: "always",
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  return (
    <div className="flex flex-col w-[98%]">
      <MainContext.Provider value={contextValue}>
        <div className="col-md-4 col-lg-3 col-xl-2">
          <EditorPanel />
        </div>
        <div className="col-md-8 col-lg-9 col-xl-10 col-12 no-gutters">
          <Editor
            height="300px"
            value={query}
            language="sql"
            theme={darkMode ? "vs-dark" : "vs-light"}
            onChange={(newCode) => setQuery(newCode)}
          />
        </div>
      </MainContext.Provider>
    </div>
  );
};

export default CodeEditor;
