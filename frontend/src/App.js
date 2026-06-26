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
    const windowHeight = window.screen.availHeight;
    const videoElement = document.querySelector("#bg video");
    console.log("window width: ", windowWidth);
    console.log("window height: ", windowHeight);

    if (videoElement) {
      const videoWidth = videoElement.offsetWidth;
      const videoHeight = videoElement.offsetHeight;
      const videoRatio = videoWidth / videoHeight;
      const windowRatio = windowWidth / windowHeight;
      console.log("video width: ", videoWidth);
      console.log("video height: ", videoHeight);
      console.log("video ratio: ", videoRatio);
      console.log("window ratio: ", windowRatio);
      if (videoRatio >= windowRatio) {
        videoElement.style.width = "";
        videoElement.style.height = "105%";
      } else {
        videoElement.style.width = "105%";
        videoElement.style.height = "";
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
