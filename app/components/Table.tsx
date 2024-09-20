/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Todo from "./Todo";

const Table = () => {
  return (
    <div>
      <div className="relative overflow-x-auto w-[70%] mx-auto mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                TITLE
              </th>
              <th scope="col" className="px-6 py-3">
                DESCRIPTION
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo /> 
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
