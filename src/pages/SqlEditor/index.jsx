import Output from "../../Components/Output";
import CodeEditor from "../../Components/CodeEditor";
import { SideMenu } from "@/Components/UI/SideMenu";

function SqlEditor() {
  return (
    <div className="pt-[60px]">
      <div className="flex flex-col md:flex-row">
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
