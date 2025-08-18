import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      {/* Blog Posts */}
      <div className="mb-6">
        <div className="bg-neutral-700 rounded-lg p-6 ">
          <h2 className="text-xl text-white font-bold mb-2">{props.title}</h2>
          <p className="text-gray-400 mb-3 text-sm">{props.description}</p>
          <p className="text-xs text-yellow-500">
            {props.date} · {props.author}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
