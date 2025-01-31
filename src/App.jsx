import SideBar from "./components/SideBar";
import AddNewProject from "./components/AddNewProject";
import EditSingleProject from "./components/EditSingleProject";

import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState({});

  const handleAddProjectView = () => {
    setProjectState(true);
  }

  const handleViewProjects = () => {
    setProjectState(false);
  }
  
  const handleSaveProject = (projectData) => {
    setProjects([...projects, projectData]);
    setProjectState(false);    
  }
  
  const handleDeleteProject = (projectData) => {
    const updatedProjects = projects.filter((project) => project.name !== projectData.name);
    setProjects(updatedProjects);
  }

  const handleEditProjectButton = (projectData) => {
    setIsEditing(true);    
    setProjectToEdit(projectData);  
  }

  const handleEditProject = (editedProjectData) => {
    const updatedProjects = projects.map((project) => {
      if (project.name === editedProjectData.name) {
        return editedProjectData;
      }
      return project;
    });
    setProjects(updatedProjects);
    setIsEditing(false);
  }

  const handleCancelEdit = () => {
    setIsEditing(false);
  }
  

  return (
    <main className="h-screen w-full flex flex-row bg-slate-300">
      <SideBar onClickAddProject={handleAddProjectView} onClickViewProjects={handleViewProjects}/>
      {projectState && (
        <AddNewProject onSaveProject={handleSaveProject}/>
      )}
      {isEditing && (
        <EditSingleProject projectData={ projectToEdit } onEditProject={handleEditProject} onCancelEdit={ handleCancelEdit }/>
      )}
      {!projectState && !isEditing && (
        <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Your Projects</h1>     
        </div>
        <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
              <h2 className="text-lg font-bold mb-4">{project.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500">Due Date: {project.dueDate}</p>
              <hr className="my-4"/>
              <div className="flex flex-row gap-4">
                <button className="bg-blue-500 text-white p-2 mt-6 mb-6 rounded hover:bg-blue-800" onClick={() => handleEditProjectButton(project)}>
                  Edit Project
                </button>
                <button className="bg-red-500 text-white p-2 mt-6 mb-6 rounded hover:bg-red-800" onClick={() => handleDeleteProject(project)}>
                  Delete Project
                </button>
              </div>                
            </div>
          ))}
        </div>
      </div>
      )}      
                     
    </main>
  );
}

export default App;
