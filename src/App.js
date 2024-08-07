import Dashboard from "./component/Dashboard/Dashboard";
import Topbar from "./component/Dashboard/Topbar";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className=" overflow-auto">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
