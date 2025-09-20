import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {data.category}
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Completed</p>
          <p className="text-sm font-medium text-white">{data.taskDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors duration-300">
            {data.title}
          </h2>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
          {data.description}
        </p>
      </div>

      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span className="text-xs font-medium text-emerald-300">Completed</span>
        </div>
        <div className="text-xs text-gray-400">
          ✅ Well done!
        </div>
      </div>

      {/* Completed Badge */}
      <div className="w-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 text-emerald-300 font-semibold py-3 px-4 rounded-xl text-center">
        <div className="flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Task Completed</span>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
