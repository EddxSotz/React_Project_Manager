export default function AddNewProject() { 
  return (
    <div className="w-2/3 max-w-xl mx-auto px-4 py-12">      
      <form className="flex flex-col space-y-2">
        <label htmlFor="project-name">Project Name</label>
        <input
          type="text"
          id="project-name"
          name="project-name"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <label htmlFor="project-description">Project Description</label>
        <textarea
          id="project-description"
          name="project-description"
          className="border-2 border-gray-300 rounded-md p-2"
        ></textarea>
        <label htmlFor="project-due-date">Project Due Date</label>
        <input
          type="date"
          id="project-due-date"
          name="project-due-date"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <div className="flex flex-row gap-4 mt-4">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Cancel
          </button>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Add Project
          </button>
        </div>        
      </form>
    </div>
  );
}