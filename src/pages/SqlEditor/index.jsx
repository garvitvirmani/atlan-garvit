import Output from "../../Components/Output";
import CodeEditor from "../../Components/CodeEditor";
import { SideMenu } from "@/Components/UI/SideMenu";
import FloatingIcons from "@/Components/UI/FloatingMenu/FloatingIcons";
import SideBar from "@/Components/SideBar";
import { useContext } from "react";
import MainContext from "@/Utils/MainContext";

function SqlEditor() {
  return (
    <div className="pt-[60px]">
      <div className="flex flex-col md:flex-row">
        <div className="fixed top-20 left-0 w-3/12 hidden md:block z-40">
          <SideBar />
        </div>
        <div className="flex flex-col items-center p-10 gap-[30px] w-full md:w-9/12 ml-auto">
          <CodeEditor />
          <Output />
        </div>
        <div className="block md:hidden">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default SqlEditor;
