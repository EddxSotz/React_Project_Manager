import SideBar from "./components/SideBar";
import AddNewProject from "./components/AddNewProject";

import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState(false);
  const [projects, setProjects] = useState([]);

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


  return (
    <main className="h-screen w-full flex flex-row">
      <SideBar onClickAddProject={handleAddProjectView} onClickViewProjects={handleViewProjects}/>
      {projectState ? (
        <AddNewProject onSaveProject={handleSaveProject}/>
      ) : (
        <div className="w-2/3 max-w-xl mx-auto px-4 py-12">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-bold">Your Projects</h1>     
          </div>
          <div className="mt-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="text-lg font-bold">{project.name}</h2>
                <p className="text-sm text-gray-500">{project.description}</p>
                <p className="text-sm text-gray-500">Due Date: {project.dueDate}</p>
                <button className="bg-red-500 text-white p-2 mt-6 mb-6 rounded hover:bg-red-800" onClick={() => handleDeleteProject(project)}>
                  Delete Project
                </button>
              </div>
            ))}
          </div>
        </div>
      )}       
    </main>
  );
}

export default App;
