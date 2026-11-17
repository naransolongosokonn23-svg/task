import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MyTasks from "./pages/MyTasks";
import "./styles/global.css";

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <Topbar />
        <MyTasks />
      </main>
    </div>
  );
}

export default App;
