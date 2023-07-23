import { useMemo, useState } from "react";
import SideBar from "./SideBar";
import Output from "./Output";
import CodeEditor from "./CodeEditor";
import MainContext from "@/Utils/MainContext";
import { SideMenu } from "@/Components/UI/SideMenu";

// import MainContext from "../../MainContext";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

function SqlEditor() {
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

  return (
    <div className="pt-[60px]">
      <MainContext.Provider value={contextValue}>
        <div className="flex">
          <div className="flex flex-col items-center w-full p-10 gap-15">
            <CodeEditor />
            <Output />
          </div>
          <SideMenu />
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default SqlEditor;
