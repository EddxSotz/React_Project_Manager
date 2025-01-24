import React from "react";
import { useState, useRef } from "react";

export default function AddNewProject({ onSaveProject }) { 
  const projectNameRef = useRef();
  const projectDescriptionRef = useRef();
  const projectDueDateRef = useRef();

  const handleAddProject = () => {    
    const projectName = projectNameRef.current.value;
    const projectDescription = projectDescriptionRef.current.value;
    const projectDueDate = projectDueDateRef.current.value;

    onSaveProject({
      name: projectName,
      description: projectDescription,
      dueDate: projectDueDate,
    })
  }

  return (
    <div className="w-2/3 max-w-xl mx-auto px-4 py-12">      
      <form className="flex flex-col space-y-2">
        <label htmlFor="project-name">Project Name</label>
        <input
          type="text"
          id="project-name"
          name="project-name"
          className="border-2 border-gray-300 rounded-md p-2"
          ref={projectNameRef}
        />
        <label htmlFor="project-description">Project Description</label>
        <textarea
          id="project-description"
          name="project-description"
          className="border-2 border-gray-300 rounded-md p-2"
          ref={projectDescriptionRef}
        ></textarea>
        <label htmlFor="project-due-date">Project Due Date</label>
        <input
          type="date"
          id="project-due-date"
          name="project-due-date"
          className="border-2 border-gray-300 rounded-md p-2"
          ref={projectDueDateRef}
        />
        <div className="flex flex-row gap-4 mt-4">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Cancel
          </button>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800" onClick={handleAddProject}>
            Add Project
          </button>
        </div>        
      </form>
    </div>
  );
}