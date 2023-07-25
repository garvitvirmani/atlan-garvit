import Output from "../../Components/Output";
import CodeEditor from "../../Components/CodeEditor";
import { SideMenu } from "@/Components/UI/SideMenu";
import FloatingIcons from "@/Components/UI/FloatingMenu/FloatingIcons";

function SqlEditor() {
  return (
    <div className="pt-[60px]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center w-full p-10 gap-[30px]">
          <CodeEditor />
          <Output />
        </div>
        <SideMenu />
      </div>
      <FloatingIcons />
    </div>
  );
}

export default SqlEditor;
