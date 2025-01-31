import React from "react";
import { useRef } from "react";

export default function EditSingleProject({ projectData, onEditProject, onCancelEdit }) {

const projectNameRef = useRef();
const projectDescriptionRef = useRef();
const projectDueDateRef = useRef();

const handleEditProject = () => {
  const projectName = projectNameRef.current.value;
  const projectDescription = projectDescriptionRef.current.value;
  const projectDueDate = projectDueDateRef.current.value;

  onEditProject({
    name: projectName,
    description: projectDescription,
    dueDate: projectDueDate,
  });
}

const handleCancelEdit = () => {
  onCancelEdit();
}
  return (
    <div className="w-2/3 max-w-xl mx-auto px-4 py-12"> 
      <h1 className="text-2xl mb-8 font-bold">Edit Project</h1>     
      <form className="flex flex-col space-y-2">
        <label htmlFor="project-name">Project Name</label>
        <input
          type="text"
          id="project-name"
          name="project-name"
          className="border-2 border-gray-300 rounded-md p-2"
          defaultValue={projectData.name}
          ref={projectNameRef}
          required
        />
        <label htmlFor="project-description">Project Description</label>
        <textarea
          id="project-description"
          name="project-description"
          className="border-2 border-gray-300 rounded-md p-2"
          defaultValue={projectData.description}
          ref={projectDescriptionRef}
        ></textarea>
        <label htmlFor="project-due-date">Project Due Date</label>
        <input
          type="date"
          id="project-due-date"
          name="project-due-date"
          className="border-2 border-gray-300 rounded-md p-2"
          defaultValue={projectData.dueDate}
          ref={projectDueDateRef}
          required
        />
        <div className="flex flex-row gap-4 mt-4">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800" onClick={handleCancelEdit}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800" onClick={ handleEditProject }>
            Save Project
          </button>
        </div>        
      </form>
    </div>
  );
}