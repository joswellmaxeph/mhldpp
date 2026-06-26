import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "98.css";
import "./App.css";
import sky from "./sky2.mp4";

function App() {
  const preFetch = async () => {
    try {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/`);
        console.log("you did it");
    } catch {
        console.error("Pre-fetch failed, but that's ok!");
    }
  }

  const onVidLoad = () => {
    const windowWidth = window.screen.availWidth;
    const videoElement = document.querySelector("#bg video");
    console.log("avail width", windowWidth);
    console.log("window width", window.innerWidth);
    console.log("window screen width", window.screen.width);

    if (videoElement) {
      console.log("video width", videoElement.offsetWidth);
      if (windowWidth < videoElement.offsetWidth) {
        videoElement.style.height = "100%";
        videoElement.style.width = "";
      } else {
        videoElement.style.width = "100%";
      }
    }
  }

  const letsGo = () => {
    const videoElement = document.querySelector("#bg video");
    videoElement.play();
  };

  preFetch();
  
  return (
    <div className="App">
      <div id="bg">
        <video autoPlay playsInline loop muted onLoadedData={onVidLoad} onCanPlay={letsGo}>
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
