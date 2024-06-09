import React, { useEffect, useState } from "react";
import Taskform from "./components/taskform";
import Taskcol from "./components/Taskcol";

export default function App() {
  const oldTask = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((task, i) => i !== index));
  };

  return (
    <div>
      <Taskform setTask={setTasks} />
      <main className="flex justify-evenly px-[8%] p-5 ">
        <Taskcol tagName='Todo' iconName='target-lock' tasks={tasks} status="Todo" deleteTask={deleteTask} />
        <Taskcol tagName='In Progress' iconName='star' tasks={tasks} status="Currently in progress" deleteTask={deleteTask} />
        <Taskcol tagName='Done' iconName='check' tasks={tasks} status="Done" deleteTask={deleteTask} />
      </main>
    </div>
  );
}
