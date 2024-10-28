import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-3">
      <div className="relative flex flex-col items-center w-[18%] px-4 py-6 rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-extrabold animate-pulse">{data.taskCount.new}</h2>
        <h3 className="text-md font-medium mt-2">New Task</h3>
        <span className="absolute inset-0 rounded-lg bg-purple-900 opacity-30 blur-xl"></span>
      </div>

      <div className="relative flex flex-col items-center w-[18%] px-4 py-6 rounded-lg bg-gradient-to-r from-teal-600 to-teal-400 text-white shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-extrabold animate-pulse">{data.taskCount.completed}</h2>
        <h3 className="text-md font-medium mt-2">Completed Task</h3>
        <span className="absolute inset-0 rounded-lg bg-teal-800 opacity-30 blur-xl"></span>
      </div>

      <div className="relative flex flex-col items-center w-[18%] px-4 py-6 rounded-lg bg-gradient-to-r from-indigo-700 to-indigo-500 text-white shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-extrabold animate-pulse">{data.taskCount.active}</h2>
        <h3 className="text-md font-medium mt-2">Accepted Task</h3>
        <span className="absolute inset-0 rounded-lg bg-indigo-900 opacity-30 blur-xl"></span>
      </div>

      <div className="relative flex flex-col items-center w-[18%] px-4 py-6 rounded-lg bg-gradient-to-r from-amber-600 to-yellow-500 text-white shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-extrabold animate-pulse">{data.taskCount.failed}</h2>
        <h3 className="text-md font-medium mt-2">Failed Task</h3>
        <span className="absolute inset-0 rounded-lg bg-yellow-800 opacity-30 blur-xl"></span>
      </div>
    </div>
  );
};

export default TaskListNumber;
