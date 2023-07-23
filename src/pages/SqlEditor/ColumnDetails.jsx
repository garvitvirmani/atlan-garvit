import { getTableColumns } from "@/Utils/tableHelper";
import { dumpData } from "../../../public/dumpData";

const ColumnDetails = () => {
  return (
    <div>
      <table>{getTableColumns(dumpData)}</table>
    </div>
  );
};

export default ColumnDetails;
