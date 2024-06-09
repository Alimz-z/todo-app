import React from "react";
import 'boxicons';

export default function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: "bg-orange-500",
    css: "bg-blue-500",
    JS: "bg-yellow-500",
    React: "bg-green-500",
    Custom: "bg-pink-500", 
    default: "bg-pink-500",
  };

  const tagColor = tagStyle[tagName] || tagStyle.default;

  return (
    <div>
      <button
        type="button"
        className={`border rounded-md p-1 w-16 ${tagColor} ${selected ? 'opacity-75' : 'opacity-100'}`}
        onClick={() => selectTag(tagName)}
      >
        {tagName}
      </button>
    </div>
  );
}
