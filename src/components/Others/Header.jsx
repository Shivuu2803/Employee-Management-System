import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("Admin");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (props.firstName) {
      setUsername(props.firstName);
    }

    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Good Morning");
    else if (hours < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, [props.firstName]);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-center justify-between p-8 rounded-lg shadow-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 h-24">
      <div>
        <h1 className="text-lg font-semibold text-gray-200">
          {greeting}, <br />
          <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300 animate-pulse">
            {username} 👋
          </span>
        </h1>
      </div>

      <button
        onClick={logOutUser}
        className="relative px-8 py-3 rounded-lg text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out bg-gradient-to-r from-green-600 to-blue-600 transform hover:scale-105 hover:from-blue-500 hover:to-green-500"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 opacity-0 rounded-lg transition-opacity duration-300 ease-in-out blur-lg hover:opacity-100"></span>
        <span className="relative z-10">Log out</span>
      </button>
    </div>
  );
};

export default Header;
