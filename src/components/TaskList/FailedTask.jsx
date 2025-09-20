import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {data.category}
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Failed</p>
          <p className="text-sm font-medium text-white">{data.taskDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-lg font-bold text-white group-hover:text-red-200 transition-colors duration-300">
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
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <span className="text-xs font-medium text-red-300">Failed</span>
        </div>
        <div className="text-xs text-gray-400">
          ❌ Needs attention
        </div>
      </div>

      {/* Failed Badge with Retry Option */}
      <div className="space-y-3">
        <div className="w-full bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30 text-red-300 font-semibold py-3 px-4 rounded-xl text-center">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Task Failed</span>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:from-orange-400 hover:to-orange-500 hover:shadow-lg hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-orange-400/50 group/btn relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
          <div className="flex items-center justify-center space-x-2 relative z-10">
            <svg className="w-4 h-4 transform group-hover/btn:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-sm">Retry Task</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
