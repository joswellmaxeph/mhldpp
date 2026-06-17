import { format } from "date-fns";

import Reflector from "./Reflector";
import OkWindow from "./OkWindow";

import { useState } from "react";

function WelcomeScreen() {
  const [soonShowing, setSoonShowing] = useState(false);
  const [begunShowing, setBegunShowing] = useState(true);

  return (
    <>
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
        onClose={() => setSoonShowing(false)}
      />

      <div class="window" id="titles">
        <div class="window-body">
          <p id="mh">MAXWELL HOUSE</p>
          <div class="field-border" id="pp">
            PARTY & POTLUCK
          </div>
          <p id="ld">LABOR DAY 2026</p>
        </div>
      </div>

      <div class="speech-bubble" id="addr">
        2030 Halstead Ave, Lakewood
      </div>
      <div class="speech-bubble" id="date">
        Monday, September 7th @ 3pm
      </div>
      <Reflector text="REFLECTION" />
    </>
  );
}

export default WelcomeScreen;
