import { format } from "date-fns";

import Reflector from "./Reflector";
import OkWindow from "./OkWindow";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function WelcomeScreen() {
  const [soonShowing, setSoonShowing] = useState(false);
  const [begunShowing, setBegunShowing] = useState(true);
  const [mainShowing, setMainShowing] = useState(false);
  const [addrShowing, setAddrShowing] = useState(false);
  const [dateShowing, setDateShowing] = useState(false);
  const [reflectorShowing, setReflectorShowing] = useState(false);
  const [searchParams] = useSearchParams();

  const skip = searchParams.get("skip");

  useEffect(() => {
    if (skip) {
      setBegunShowing(false);
      setSoonShowing(false);
      setMainShowing(true);
      setReflectorShowing(true);
    }
  }, [skip]);

  return (
    <div className="welcome-container">
      {!skip && <OkWindow
        showing={begunShowing}
        text="Summer has begun..."
        quote={`it is ${format(new Date(), "EEEE, MMMM do")}`}
        id="begun"
        onClose={() => {
          setBegunShowing(false);
          setSoonShowing(true);
        }}
      />}
      {!skip &&<OkWindow
        showing={soonShowing}
        text="Soon it will end..."
        quote="all things end..."
        id="soon"
        onClose={() => {setSoonShowing(false); localStorage.setItem("previouslyVisited", "true");setMainShowing(true);setTimeout(() => setReflectorShowing(true), 2000);}}
      />}

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

      <Reflector showing={reflectorShowing} text="REFLECTION" />
    </div>
  );
}

export default WelcomeScreen;
