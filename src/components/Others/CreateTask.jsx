import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      title,
      description,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCount.new += 1;
      }
    });

    setUserData(data);

    setTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setDescription("");
  };

  return (
    <div className="p-4 bg-gray-800 mt-5 rounded-lg shadow-lg">
      <h2 className="text-2xl text-white mb-3 text-center">Create a New Task</h2>
      <form onSubmit={submitHandler} className="flex flex-wrap w- items-start justify-between">
        <div className="w-1/2 pr-2">
          <div className="mb-4">
            <label className="text-md text-gray-300 mb-1 block">Task Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-gray-700 border border-gray-600 placeholder-gray-400 focus:border-emerald-500 transition duration-300"
              type="text"
              placeholder="Enter task here..."
            />
          </div>

          <div className="mb-4">
            <label className="text-md text-gray-300 mb-1 block">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-gray-700 border border-gray-600 text-gray-300 placeholder-gray-400 focus:border-emerald-500 transition duration-300"
              type="date"
            />
          </div>

          <div className="mb-4">
            <label className="text-md text-gray-300 mb-1 block">Assign To</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-gray-700 border border-gray-600 placeholder-gray-400 focus:border-emerald-500 transition duration-300"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div className="mb-4">
            <label className="text-md text-gray-300 mb-1 block">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-gray-700 border border-gray-600 placeholder-gray-400 focus:border-emerald-500 transition duration-300"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start pl-2">
          <label className="text-md text-gray-300 mb-1 block">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-3 rounded-lg outline-none bg-gray-700 border border-gray-600 placeholder-gray-400 focus:border-emerald-500 transition duration-300"
            placeholder="Enter description of the task here..."
          ></textarea>
          <button className="bg-emerald-600 hover:bg-emerald-700 py-3 px-5 rounded-lg text-lg font-medium mt-4 w-full transition-all duration-300 ease-in">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
