import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = ({ showToast }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});
  const [error, setError] = useState({
    title: false,
    description: false,
    taskDate: false,
    asignTo: false,
    category: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !description || !taskDate || !asignTo || !category) {
      setError({
        title: !title,
        description: !description,
        taskDate: !taskDate,
        asignTo: !asignTo,
        category: !category,
      });
      showToast("⚠️ Please fill in all fields to create a task.", 'error');
      return;
    }

    setError({
      title: false,
      description: false,
      taskDate: false,
      asignTo: false,
      category: false,
    });

    const taskToAdd = {
      title,
      description,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setNewTask(taskToAdd);

    // Work directly with fresh localStorage data instead of potentially stale context
    const freshData = JSON.parse(localStorage.getItem("employees") || "[]");
    let taskAdded = false;
    
    freshData.forEach((elem) => {
      if (asignTo === elem.name) {
        elem.tasks.push(taskToAdd);
        elem.taskCount.new += 1;
        taskAdded = true;
      }
    });

    if (!taskAdded) {
      showToast(`Employee "${asignTo}" not found!`, 'error');
      return;
    }
    
    // Save the updated data to localStorage
    localStorage.setItem("employees", JSON.stringify(freshData));
    
    // Update context with the fresh data
    setUserData(freshData);
    
    // Trigger storage event to notify other components
    window.dispatchEvent(new Event('storage'));

    showToast("🎉 Task created successfully and assigned!", 'success');

    setTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setDescription("");
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8 shadow-2xl">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Create New Task</h2>
          <p className="text-gray-400 text-sm">Assign tasks to your team members</p>
        </div>
      </div>


      <form onSubmit={submitHandler} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main form fields */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Task Title */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-white/90">
                <span className="text-blue-400">📝</span>
                <span>Task Title</span>
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full py-3 px-4 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                  error.title ? 'border-red-400' : 'border-white/20 focus:border-blue-400'
                }`}
                type="text"
                placeholder="Enter task title..."
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-white/90">
                <span className="text-blue-400">📅</span>
                <span>Due Date</span>
              </label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className={`w-full py-3 px-4 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                  error.taskDate ? 'border-red-400' : 'border-white/20 focus:border-blue-400'
                }`}
                type="date"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Assign To */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-white/90">
                <span className="text-blue-400">👤</span>
                <span>Assign To</span>
              </label>
              <input
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                className={`w-full py-3 px-4 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                  error.asignTo ? 'border-red-400' : 'border-white/20 focus:border-blue-400'
                }`}
                type="text"
                placeholder="Employee name..."
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-white/90">
                <span className="text-blue-400">🏷️</span>
                <span>Category</span>
              </label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full py-3 px-4 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                  error.category ? 'border-red-400' : 'border-white/20 focus:border-blue-400'
                }`}
                type="text"
                placeholder="Design, Dev, etc."
              />
            </div>
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-white/90">
            <span className="text-blue-400">📄</span>
            <span>Description</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full h-40 py-3 px-4 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm resize-none ${
              error.description ? 'border-red-400' : 'border-white/20 focus:border-blue-400'
            }`}
            placeholder="Enter detailed task description..."
          />
          
          {/* Create Button */}
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:from-emerald-400 hover:to-teal-500 hover:shadow-lg hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 mt-4 group relative overflow-hidden"
          >
            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="flex items-center justify-center space-x-2 relative z-10">
              <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Create Task</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
