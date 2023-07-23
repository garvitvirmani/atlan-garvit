import MainContext from "@/Utils/MainContext";
import { useContext, useEffect, useState } from "react";

const Query = (props) => {
  const { setQuery, queryHistory } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(queryHistory[props.type]);

  const renderQueryList = (array) => {
    return array.map((i) => {
      return (
        <div className=" cursor-pointer query" key={i}>
          <code onClick={() => setQuery(i)}>{i}</code>
        </div>
      );
    });
  };

  useEffect(() => {
    setList(queryHistory[props.type]);
  }, [props, queryHistory]);

  useEffect(() => {
    setList(
      queryHistory?.[props?.type]?.filter((i) =>
        i.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ); // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className="query-wrapper">
      <div className="search-bar">
        <input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {list.length > 0 ? (
        renderQueryList(list)
      ) : (
        <div className="placeholder-text">
          <span className="fa fa-exclamation-circle"></span>
          <p>No queries found.</p>
        </div>
      )}
    </div>
  );
};

export default Query;
