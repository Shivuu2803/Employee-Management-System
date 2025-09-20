import React, { useState } from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };
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
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-emerald-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <Header changeUser={props.changeUser} />
        <CreateTask showToast={showToast} />
        <AllTask showToast={showToast} />
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in max-w-sm w-full">
          <div className={`backdrop-blur-xl rounded-2xl shadow-2xl border p-4 transform transition-all duration-300 ${
            toast.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-400/30' 
              : 'bg-red-500/10 border-red-400/30'
          }`}>
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
              }`}>
                {toast.type === 'success' ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-sm ${
                  toast.type === 'success' ? 'text-emerald-200' : 'text-red-200'
                }`}>
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => setToast(null)}
                className={`text-white/60 hover:text-white transition-colors duration-200 flex-shrink-0 ${
                  toast.type === 'success' ? 'hover:text-emerald-200' : 'hover:text-red-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Progress bar */}
            <div className={`mt-3 h-1 rounded-full overflow-hidden ${
              toast.type === 'success' ? 'bg-emerald-500/20' : 'bg-red-500/20'
            }`}>
              <div className={`h-full rounded-full animate-progress ${
                toast.type === 'success' ? 'bg-emerald-400' : 'bg-red-400'
              }`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
