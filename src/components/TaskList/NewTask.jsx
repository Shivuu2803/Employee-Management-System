import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group">
      {/* Task header with category and date */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {data.category}
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Due Date</p>
          <p className="text-sm font-medium text-white">{data.taskDate}</p>
        </div>
      </div>

      {/* Task details */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
            {data.title}
          </h2>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
          {data.description}
        </p>
      </div>

      {/* Status indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-xs font-medium text-purple-300">New Task</span>
        </div>
        <div className="text-xs text-gray-400">
          📝 Ready to start
        </div>
      </div>

      {/* Accept button */}
      <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:from-purple-400 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400/50 group/btn relative overflow-hidden">
        {/* Button shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
        <div className="flex items-center justify-center space-x-2 relative z-10">
          <svg className="w-4 h-4 transform group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Accept Task</span>
        </div>
      </button>
    </div>
  );
};

export default NewTask;
