import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "98.css";
import "./App.css";
import sky from "./sky2.mp4";

function App() {
  return (
    <div className="App">
      <div id="bg">
        <video autoPlay loop muted>
          <source src={sky} type="video/mp4" />
        </video>
      </div>
      <div id="main-contain">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
