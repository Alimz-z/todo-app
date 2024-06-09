import React from "react";
import 'boxicons';
import Taskcard from "./taskcard";

export default function Taskcol({ iconName, tagName, tasks, status, deleteTask }) {
  return (
    <div>
      <h2 className="flex items-center gap-2">
        <box-icon name={iconName}></box-icon>
        {tagName}
      </h2>
      {tasks.map((task, index) =>
        task.status === status && (
          <Taskcard
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)} // Pass the deleteTask function
          />
        )
      )}
    </div>
  );
}
