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
  return (
    <div className="pt-[60px]">
      <div className="flex">
        <div className="flex flex-col items-center w-full p-10 gap-[30px]">
          <CodeEditor />
          <Output />
        </div>
        <SideMenu />
      </div>
    </div>
  );
}

export default SqlEditor;
