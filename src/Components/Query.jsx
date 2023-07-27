import MainContext from "@/Utils/MainContext";
import SnackBar, { showSnackBar } from "@/Components/UI/SnackBar";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

const Query = (props) => {
  const { setQuery, queryHistory, setQueryHistory } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(queryHistory?.[props?.type]);

  const [snackBarMessage, setsnackBarMessage] = useState({
    snackBarMessage: "",
    isError: false,
  });

  const renderQueryList = (array) => {
    return array?.map((i) => {
      return (
        <div
          className=" cursor-pointer query"
          key={i}
          onClick={() => {
            setQuery(i);
            setsnackBarMessage({
              snackBarMessage: "Query Selected !",
              isError: false,
            });
            setTimeout(() => setsnackBarMessage({}), 1000);
          }}
        >
          <code>{i.length > 80 ? i.slice(0, 80) + "..." : i}</code>
        </div>
      );
    });
  };

  useEffect(() => {
    setList(queryHistory?.[props?.type]);
  }, [props, queryHistory]);

  useEffect(() => {
    setList(
      queryHistory?.[props?.type]?.filter((i) =>
        i?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      )
    ); // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className="query-wrapper">
      <div className="search-bar flex items-center gap-2 p-1">
        <input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Image
          src={"/images/delete.svg"}
          alt={""}
          width={30}
          height={30}
          title={`Delete all ${props?.type} queries`}
          onClick={() => {
            setQueryHistory({
              ...queryHistory,
              [props?.type]: [],
            });
            setsnackBarMessage({
              snackBarMessage: `${props?.type} Queries Deleted`,
              isError: false,
            });
            setTimeout(() => setsnackBarMessage({}), 1000);
          }}
          className="cursor-pointer"
        />
      </div>
      {list?.length > 0 ? (
        renderQueryList(list)
      ) : (
        <div className="placeholder-text">
          <span className="fa fa-exclamation-circle"></span>
          <p>No queries found.</p>
        </div>
      )}
      {snackBarMessage?.snackBarMessage?.length > 0 && (
        <SnackBar
          msg={snackBarMessage?.snackBarMessage}
          isError={snackBarMessage?.isError}
        />
      )}
    </div>
  );
};

export default Query;
