import { useContext } from "react";
import Query from "./Query";
import MainContext from "@/Utils/MainContext";

const SideBar = () => {
  const { queryHistory } = useContext(MainContext);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <h5>
          <span className="fa fa-cloud secondary me-2"></span>{" "}
          <span className="text-1">Pick Query</span>
        </h5>
        {queryHistory ? <Query type="saved" /> : null}
      </div>
      <div className="sidebar-item">
        <h5>
          <span className="fa fa-undo secondary me-2"></span>{" "}
          <span className="text-1">History</span>
        </h5>
        {queryHistory ? <Query type="history" /> : null}
      </div>
    </div>
  );
};

export default SideBar;
