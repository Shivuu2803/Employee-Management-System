import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("Admin");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (props.name) {
      setUsername(props.name);
    }

    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Good Morning");
    else if (hours < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, [props.name]);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-center justify-between p-6 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10 mb-8">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium">{greeting},</p>
          <h1 className="text-3xl font-bold text-white flex items-center space-x-2">
            <span>{username}</span>
            <span className="text-2xl">👋</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Current time */}
        <div className="text-right">
          <p className="text-xs text-gray-400">Current Time</p>
          <p className="text-sm font-medium text-white">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
        
        <button
          onClick={logOutUser}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-emerald-400 hover:to-teal-500 hover:shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
