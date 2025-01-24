import SideBar from "./components/SideBar";
import AddNewProject from "./components/AddNewProject";

import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId:  undefined,
    projects: []    
  });

  const handleAddProject = () => {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  
  const handleSaveProject = (projectData) => {
    setProjectState( prevState => {
      const newProject = {
        id: projectState.projects.length + 1,
        ...projectData
      };
      return {
        ...prevState,        
        projects: [...prevState.projects, newProject],
      };
    })
  }

  console.log(projectState);
  
  return (
    <main className="h-screen w-full flex flex-row">
      <SideBar onClickAddProject={handleAddProject}/>
      {projectState.selectedProjectId !== undefined ? (
        <AddNewProject onSaveProject={handleSaveProject}/>
      ) : (
        <div className="w-2/3 max-w-xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-center">Select a project</h1>
        </div>
      )}       
    </main>
  );
}

export default App;
