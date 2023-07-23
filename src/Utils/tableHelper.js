const getTableRowsFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return arr.map((i) => {
    return (
      <tr>
        {keys.map((a) => {
          return <td>{i[a]}</td>;
        })}
      </tr>
    );
  });
};

const getTableHeadFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return (
    <tr>
      {keys.map((i) => {
        return <td>{i}</td>;
      })}
    </tr>
  );
};

const getTableColumns = (arr) => {
  const keys = Object.keys(arr[0]);
  return keys.map((i) => {
    return (
      <tr>
        <td>{i}</td>
      </tr>
    );
  });
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
