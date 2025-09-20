import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Your Tasks</h2>
          <p className="text-gray-400 text-sm">Manage and track your assigned tasks</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span>{data.tasks.length} Total Tasks</span>
        </div>
      </div>

      {/* Tasks Container */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <div
          id="tasklist"
          className="flex flex-nowrap gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#374151 transparent' }}
        >
          {data.tasks.length > 0 ? (
            data.tasks.map((elem, idx) => {
              if (elem.active) {
                return <AcceptTask key={idx} data={elem} />;
              }
              if (elem.newTask) {
                return <NewTask key={idx} data={elem} />;
              }
              if (elem.completed) {
                return <CompleteTask key={idx} data={elem} />;
              }
              if (elem.failed) {
                return <FailedTask key={idx} data={elem} />;
              }
              return null;
            })
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-gray-600/50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No Tasks Assigned</h3>
              <p className="text-gray-500 text-sm">You don't have any tasks assigned yet. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
