import  { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "./index.css";
import "./styles/animations.css";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { addEmployee } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [showSignup, setShowSignup] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // Update logged-in employee data when userData context changes
  useEffect(() => {
    if (user === "employee" && loggedInUserData && userData) {
      // Check what's actually in localStorage
      const localStorageData = JSON.parse(localStorage.getItem("employees") || "[]");
      const localStorageEmployee = localStorageData.find(emp => emp.id === loggedInUserData.id);
      
      const updatedEmployee = userData.find(emp => emp.id === loggedInUserData.id);
      
      if (updatedEmployee) {
        // If context doesn't match localStorage, force refresh context
        if (localStorageEmployee && localStorageEmployee.tasks.length !== updatedEmployee.tasks.length) {
          // Force refresh the context by reloading from localStorage
          const freshData = JSON.parse(localStorage.getItem("employees") || "[]");
          setUserData(freshData);
          return;
        }
        
        setLoggedInUserData(updatedEmployee);
        // Update localStorage with fresh data
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: updatedEmployee })
        );
      }
    }
  }, [userData, user, loggedInUserData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      // Always get fresh employee data from localStorage instead of potentially stale context
      const freshEmployeeData = JSON.parse(localStorage.getItem("employees") || "[]");
      const employee = freshEmployeeData.find(
        (e) => email == e.email && e.password == password
      );
      
      
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        showToast("Invalid email or password. Please try again.", 'error');
      }
    } else {
      showToast("Invalid email or password. Please try again.", 'error');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
      if (type === 'success') {
        setShowSignup(false);
      }
    }, 3000);
  };

  const handleSignup = (signupData) => {
    const result = addEmployee(signupData);
    
    if (result.success) {
      setUserData(prev => [...prev, result.employee]);
      
      showToast("Account created successfully! Redirecting to login...", 'success');
    } else {
      showToast(result.message, 'error');
    }
  };

  const switchToSignup = () => {
    setShowSignup(true);
  };

  const switchToLogin = () => {
    setShowSignup(false);
  };

  return (
    <>
      {!user ? (
        showSignup ? (
          <Signup handleSignup={handleSignup} switchToLogin={switchToLogin} />
        ) : (
          <Login handleLogin={handleLogin} switchToSignup={switchToSignup} />
        )
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}

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
    </>
  );
};

export default App;
