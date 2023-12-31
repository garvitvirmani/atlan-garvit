const getTableRowsFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return arr.map((i, index) => {
    return (
      <tr key={index}>
        {keys.map((a, index) => (
          <td key={index}>{i[a]}</td>
        ))}
      </tr>
    );
  });
};

const getTableHeadFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return (
    <tr>
      {keys.map((i, index) => {
        return <td key={index}>{i}</td>;
      })}
    </tr>
  );
};

const getTableColumns = (arr) => {
  return arr.map((i, index) => {
    return (
      <tr key={index}>
        <td>{i}</td>
      </tr>
    );
  });
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
