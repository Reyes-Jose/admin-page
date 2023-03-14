import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <SideBar />
        <div className="rightPage">Other page</div>
      </div>
    </div>
  );
}

export default App;
