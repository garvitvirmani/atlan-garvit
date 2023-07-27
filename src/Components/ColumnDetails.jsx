import { getTableColumns } from "@/Utils/tableHelper";
import { dumpData } from "../../public/dumpData";

const ColumnDetails = ({ result }) => {
  return (
    <div>
      <table>{getTableColumns(result)}</table>
    </div>
  );
};

export default ColumnDetails;
