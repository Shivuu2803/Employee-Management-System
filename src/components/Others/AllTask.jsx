import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { getLocalStorage } from "../../utils/localStorage";

const AllTask = ({ showToast }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const refreshData = () => {
    const { employees } = getLocalStorage();
    console.log("Refreshing data - Found employees:", employees);
    console.log("Current context userData:", userData);
    
    // Force update the context
    setUserData([...employees]); // Create new array to force re-render
    
    // Show toast with current employee count
    showToast(`🔄 Refreshed! Found ${employees.length} employees in database.`, 'success');
    
    // Force a re-render by updating localStorage timestamp
    localStorage.setItem("lastRefresh", Date.now().toString());
  };

  const getTotalTasks = () => {
    if (!userData || !Array.isArray(userData)) return 0;
    return userData.reduce((total, employee) => {
      return total + employee.taskCount.new + employee.taskCount.active + employee.taskCount.completed + employee.taskCount.failed;
    }, 0);
  };

  const getStatusColor = (count, type) => {
    if (count === 0) return 'text-gray-500';
    switch (type) {
      case 'new': return 'text-purple-400';
      case 'active': return 'text-blue-400';
      case 'completed': return 'text-emerald-400';
      case 'failed': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Team Overview</h2>
              <p className="text-gray-400 text-sm">
                Monitor all employees and their task progress 
                <span className="ml-2 text-emerald-400">
                  (Showing: {userData ? userData.length : 0} employees)
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs text-gray-400">Total Tasks</p>
              <p className="text-xl font-bold text-white">{getTotalTasks()}</p>
            </div>
            <button
              onClick={refreshData}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 text-white/80 rounded-xl transition-all duration-300 hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 group"
            >
              <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium">Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="bg-white/5">
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span>👤</span>
                  <span>Employee</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300 border-b border-white/10">
                <div className="flex items-center justify-center space-x-1">
                  <span>📝</span>
                  <span>New</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300 border-b border-white/10">
                <div className="flex items-center justify-center space-x-1">
                  <span>⚡</span>
                  <span>Active</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300 border-b border-white/10">
                <div className="flex items-center justify-center space-x-1">
                  <span>✅</span>
                  <span>Completed</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300 border-b border-white/10">
                <div className="flex items-center justify-center space-x-1">
                  <span>❌</span>
                  <span>Failed</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300 border-b border-white/10">
                Total
              </th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {userData && userData.length > 0 ? userData.map((elem, idx) => {
              const totalEmployeeTasks = elem.taskCount.new + elem.taskCount.active + elem.taskCount.completed + elem.taskCount.failed;
              return (
                <tr 
                  key={idx}
                  className="hover:bg-white/5 transition-colors duration-200 border-b border-white/5 group"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                        {elem.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-white font-medium">{elem.name}</p>
                        <p className="text-gray-400 text-xs">{elem.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${getStatusColor(elem.taskCount.new, 'new')} ${elem.taskCount.new > 0 ? 'bg-purple-500/20' : 'bg-gray-500/20'}`}>
                      {elem.taskCount.new}
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${getStatusColor(elem.taskCount.active, 'active')} ${elem.taskCount.active > 0 ? 'bg-blue-500/20' : 'bg-gray-500/20'}`}>
                      {elem.taskCount.active}
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${getStatusColor(elem.taskCount.completed, 'completed')} ${elem.taskCount.completed > 0 ? 'bg-emerald-500/20' : 'bg-gray-500/20'}`}>
                      {elem.taskCount.completed}
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${getStatusColor(elem.taskCount.failed, 'failed')} ${elem.taskCount.failed > 0 ? 'bg-red-500/20' : 'bg-gray-500/20'}`}>
                      {elem.taskCount.failed}
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <div className="inline-flex items-center justify-center w-10 h-8 rounded-full bg-white/10 text-white font-bold border border-white/20">
                      {totalEmployeeTasks}
                    </div>
                  </td>
                </tr>
              );
            }) : (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-400">
                  <div className="flex flex-col items-center space-y-2">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>No employees found. Loading data...</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Stats */}
      <div className="p-6 border-t border-white/10 bg-white/5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-purple-400">{userData ? userData.reduce((sum, emp) => sum + emp.taskCount.new, 0) : 0}</p>
            <p className="text-xs text-gray-400">Total New</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">{userData ? userData.reduce((sum, emp) => sum + emp.taskCount.active, 0) : 0}</p>
            <p className="text-xs text-gray-400">Total Active</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-400">{userData ? userData.reduce((sum, emp) => sum + emp.taskCount.completed, 0) : 0}</p>
            <p className="text-xs text-gray-400">Total Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-400">{userData ? userData.reduce((sum, emp) => sum + emp.taskCount.failed, 0) : 0}</p>
            <p className="text-xs text-gray-400">Total Failed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{userData ? userData.length : 0}</p>
            <p className="text-xs text-gray-400">Total Employees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
