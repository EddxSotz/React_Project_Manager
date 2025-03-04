import React from 'react';

export default function SideBar({ onClickAddProject, onClickViewProjects }) {
  return (
    <aside className="w-1/3 max-w-72 min-w-min h-screen bg-gray-800 p-4 text-center">
      <h1 className="text-white text-2xl font-bold p-4">Your Projects</h1>
      <button className="bg-blue-500 text-white p-2 m-4 rounded hover:bg-blue-800" onClick={onClickAddProject}>New Project</button>
      <button className="bg-blue-500 text-white p-2 m-4 rounded hover:bg-blue-800" onClick={ onClickViewProjects}>All Projects</button>
    </aside>
  );
}
