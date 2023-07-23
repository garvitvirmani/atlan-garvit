import {
  getTableHeadFromData,
  getTableRowsFromData,
} from "@/Utils/tableHelper";

const Table = (props) => {
  return (
    <div className="query-table">
      {props.result.length > 0 ? (
        <table>
          <thead>{getTableHeadFromData(props.result)}</thead>
          {getTableRowsFromData(props.result)}
        </table>
      ) : null}
    </div>
  );
};

export default Table;
