import React, { useState } from "react";
import Tag from "./Tag";
import 'boxicons';

export default function Taskform({ setTask }) {
  const [taskdata, setTaskdata] = useState({
    task: "",
    status: "Todo",
    tags: [],
    customTag: "", // Add state for custom tag input
  });

  const checkTag = (tag) => taskdata.tags.some(item => item === tag);

  const selectTag = (tag) => {
    if (checkTag(tag)) {
      const filtertag = taskdata.tags.filter(item => item !== tag);
      setTaskdata(prev => ({ ...prev, tags: filtertag }));
    } else {
      setTaskdata(prev => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  const handleCustomTagChange = (e) => {
    setTaskdata(prev => ({ ...prev, customTag: e.target.value }));
  };

  const handleCustomTagKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const customTag = taskdata.customTag.trim();
      if (customTag !== "") {
        setTaskdata(prev => ({ ...prev, tags: [...prev.tags, customTag], customTag: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTags = [...taskdata.tags];
    if (taskdata.customTag.trim() !== "") {
      updatedTags.push(taskdata.customTag.trim());
    }
    setTask(prev => [...prev, { ...taskdata, tags: updatedTags }]);
    setTaskdata({
      task: "",
      status: "Todo",
      tags: [],
      customTag: "", // Reset customTag input
    });
  };

  const onChangeevent = (e) => {
    const { name, value } = e.target;
    setTaskdata(prev => ({ ...prev, [name]: value }));
  };

  return (
    <header className="flex gap-4 flex-col items-center justify-center shadow-md w-[60%] mx-auto mt-2">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full placeholder:text-gray-600 border-color:black rounded-md border border-style: solid border-black h-11"
          type="text"
          name="task"
          placeholder="Enter your task"
          onChange={onChangeevent}
          value={taskdata.task}
        />
        <div className="flex items-center justify-evenly w-full mt-4 gap-4">
          <div className="flex gap-4">
            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
            <Tag tagName="css" selectTag={selectTag} selected={checkTag("css")} />
            <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={taskdata.customTag}
              onChange={handleCustomTagChange}
              onKeyDown={handleCustomTagKeyPress}
              placeholder="Enter custom tag"
              className="border rounded-md p-1 w-42"
            />
          </div>
          <div>
            <select
              name="status"
              onChange={onChangeevent}
              className="bg-white border rounded-md w-[200px] h-[40px]"
              value={taskdata.status}
            >
              <option value="Todo">Todo</option>
              <option value="Currently in progress">Currently in progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button type="submit" className="bg-purple-600 rounded-md p-1">+ Add Task</button>
        </div>
      </form>
    </header>
  );
}
