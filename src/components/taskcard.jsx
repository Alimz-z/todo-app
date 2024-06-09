import React from "react";
import Tag from "./Tag";
import 'boxicons';

export default function Taskcard({ task, deleteTask }) {
  const handleDelete = () => {
    // Call the deleteTask function passed from the parent component
    deleteTask();
  };

  return (
    <div className="shadow-md w-[400px] pl-2 h-[100px] rounded-lg">
      <article className="mt-2 flex items-start flex-col gap-2 h-full justify-evenly w-full">
        <p>{task.task}</p>
        <div className="flex gap-8 w-full justify-between">
          <div className="flex gap-4">
            {task.tags.map((tag, index) => (
              <Tag key={index} tagName={tag} />
            ))}
          </div>
          <div className="hover:bg-slate-500 flex items-center rounded-full p-1 opacity-60 hover:opacity-85" onClick={handleDelete}>
            <box-icon name="trash" color='#00000090'></box-icon>
          </div>
        </div>
      </article>
    </div>
  );
}
