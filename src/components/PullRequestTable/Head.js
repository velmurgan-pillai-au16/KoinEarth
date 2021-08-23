import React from "react";

function TableHead() {
  return (
    <>
      <div
        id="pr-table-head"
        className="bg-gray-200 border border-gray-500 py-3 flex flex-row w-full text-center"
      >
        <div className="py-3 text-base font-medium text-black uppercase tracking-wider w-6/12">
          <strong>Title</strong>
        </div>
        <div className="px-2 py-3 text-base font-medium text-black uppercase tracking-wider w-2/12">
          <strong>Base Branch</strong>
        </div>
        <div className="px-2 py-3 text-base font-medium text-black uppercase tracking-wider w-2/12">
          <strong>Author Branch</strong>
        </div>
        <div className="px-2 py-3 text-base font-medium text-black uppercase tracking-wider w-2/12">
          <strong>Reviewers</strong>
        </div>
      </div>
    </>
  );
}

export default TableHead;
