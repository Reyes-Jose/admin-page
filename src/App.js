import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./components/pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <SideBar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
