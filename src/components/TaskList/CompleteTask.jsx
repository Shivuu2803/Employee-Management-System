import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[280px] p-5 bg-gray-800 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
      <div className="flex justify-between items-center mb-3">
        <h3 className="bg-blue-600 text-sm text-white px-3 py-1 rounded-md">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-300">{data.taskDate}</h4>
      </div>
      <h2 className="mt-2 text-xl font-semibold text-white">{data.title}</h2>
      <p className="text-sm mt-1 text-gray-400">{data.description}</p>
      <div className="mt-4">
        <button className="w-full py-2 bg-blue-500 text-white rounded-md transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
