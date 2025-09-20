import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {data.category}
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Due Date</p>
          <p className="text-sm font-medium text-white">{data.taskDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h2 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
            {data.title}
          </h2>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
          {data.description}
        </p>
      </div>

      {/* Current status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-xs font-medium text-blue-300">In Progress</span>
        </div>
        <div className="text-xs text-gray-400">
          ⚡ Active work
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-2.5 px-3 rounded-lg transition-all duration-300 hover:from-emerald-400 hover:to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 group/btn relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
          <div className="flex items-center justify-center space-x-1 relative z-10">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs">Complete</span>
          </div>
        </button>
        
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2.5 px-3 rounded-lg transition-all duration-300 hover:from-red-400 hover:to-red-500 hover:shadow-lg hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-400/50 group/btn relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
          <div className="flex items-center justify-center space-x-1 relative z-10">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-xs">Failed</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
