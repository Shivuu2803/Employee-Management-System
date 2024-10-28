import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-5 shadow-lg">
      <div className="bg-blue-600 mb-4 py-3 px-5 flex justify-between rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white w-1/5">Employee Name</h2>
        <h3 className="text-xl font-semibold text-white w-1/5">New Task</h3>
        <h5 className="text-xl font-semibold text-white w-1/5">Active Task</h5>
        <h5 className="text-xl font-semibold text-white w-1/5">Completed</h5>
        <h5 className="text-xl font-semibold text-white w-1/5">Failed</h5>
      </div>
      <div className="h-[180px] overflow-auto">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-blue-500 mb-3 py-3 px-5 flex justify-between items-center rounded-lg bg-gray-700 transition-all duration-200 hover:shadow-lg"
          >
            <h2 className="text-lg font-medium text-white w-1/5">{elem.firstName}</h2>
            <h3 className="text-lg font-medium text-blue-300 w-1/5">
              {elem.taskCount.new}
            </h3>
            <h5 className="text-lg font-medium text-yellow-300 w-1/5">
              {elem.taskCount.active}
            </h5>
            <h5 className="text-lg font-medium text-green-400 w-1/5">
              {elem.taskCount.completed}
            </h5>
            <h5 className="text-lg font-medium text-red-500 w-1/5">
              {elem.taskCount.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
