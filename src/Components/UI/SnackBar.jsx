import React from "react";

function SnackBar({ msg, isError = false }) {
  return (
    <div
      className={`border px-4 py-2 fixed top-20 right-8 flex justify-between items-center rounded-full ${
        isError
          ? "bg-red-100 border-red-400 text-red-700"
          : "bg-green-100 border-green-400 text-green-700"
      }`}
      role="alert"
    >
      <strong class="font-bold">{msg ?? "Done !"}</strong>
    </div>
  );
}

export default SnackBar;
