import { format } from "date-fns";

import Reflector from "./Reflector";
import OkWindow from "./OkWindow";

import { useState, useEffect, useParams } from "react";

function WelcomeScreen() {
  const [soonShowing, setSoonShowing] = useState(false);
  const [begunShowing, setBegunShowing] = useState(true);
  const [mainShowing, setMainShowing] = useState(false);
  const [addrShowing, setAddrShowing] = useState(false);
  const [dateShowing, setDateShowing] = useState(false);
  const [setReflectorShowing] = useState(false);

  const beenThrough = localStorage.getItem("beenThrough") === "true";
  useEffect(() => {
    if (beenThrough) {
      setBegunShowing(false);
      setSoonShowing(false);
      setMainShowing(true);
    } else {
      setBegunShowing(true);
      setSoonShowing(false);
      setMainShowing(false);
    }
  }, [beenThrough])

  return (
    <div className="welcome-container">
      <OkWindow
        showing={begunShowing}
        text="Summer has begun..."
        quote={`it is ${format(new Date(), "EEEE, MMMM do")}`}
        id="begun"
        onClose={() => {
          setBegunShowing(false);
          setSoonShowing(true);
        }}
      />
      <OkWindow
        showing={soonShowing}
        text="Soon it will end..."
        quote="all things end..."
        id="soon"
        onClose={() => {setSoonShowing(false); localStorage.setItem("previouslyVisited", "true");setMainShowing(true);}}
      />

      <div className={`window ${mainShowing ? "showing" : ""}`} id="titles">
        <div className="window-body">
          <p id="mh" onClick={() => {setAddrShowing(!addrShowing);}}>MAXWELL HOUSE</p>
          <div className="field-border" id="pp">
            PARTY & POTLUCK
          </div>
          <p id="ld" onClick={() => {setDateShowing(!dateShowing);}}>LABOR DAY 2026</p>
        </div>
      </div>

      <div className={`speech-bubble ${addrShowing ? "showing" : ""}`} id="addr">
        2030 Halstead Ave, Lakewood
      </div>
      <div className={`speech-bubble ${dateShowing ? "showing" : ""}`} id="date">
        Monday, September 7th @ 3pm
      </div>

      <Reflector showing={setReflectorShowing} text="REFLECTION" />
    </div>
  );
}

export default WelcomeScreen;
