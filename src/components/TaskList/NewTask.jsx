import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[280px] p-5 bg-gray-800 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
      <div className="flex justify-between items-center mb-3">
        <h3 className="bg-red-600 text-sm text-white px-3 py-1 rounded-md">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-300">{data.taskDate}</h4>
      </div>
      <h2 className="mt-2 text-xl font-semibold text-white">{data.title}</h2>
      <p className="text-sm mt-1 text-gray-400">{data.description}</p>
      <div className="mt-4">
        <button className="w-full bg-yellow-500 py-2 rounded-md text-white transition duration-200 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
