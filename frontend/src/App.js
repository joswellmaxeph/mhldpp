import { Outlet } from "react-router-dom";
import "98.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="main-contain">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
