import React from "react";

const Tags = ({ tag }) => {
  return (
    <a
      rel="noopener noreferrer"
      href="#"
      className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
    >
      # {tag.toUpperCase()}
    </a>
  );
};

export default Tags;
