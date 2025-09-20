import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <Header
          changeUser={props.changeUser}
          name={props.data.name}
        />
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
