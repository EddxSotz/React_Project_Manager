import SideBar from "./components/SideBar";
import AddNewProject from "./components/AddNewProject";

function App() {
  return (
    <main className="h-screen w-full flex flex-row">
      <SideBar />
      <AddNewProject />
    </main>
  );
}

export default App;
