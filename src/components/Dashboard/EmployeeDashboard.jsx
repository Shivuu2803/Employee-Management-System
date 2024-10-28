import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header changeUser={props.changeUser} firstName={props.data.firstName} />
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
