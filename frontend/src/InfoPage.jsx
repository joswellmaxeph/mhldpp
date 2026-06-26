import arrivalMap from "./ArrivalMap.png";

function InfoPage() {
  return (
    <div className="info-page">
      <ul className="tree-view">
        <li>
          <details>
            <summary>DATE & TIME</summary>
            <li>Monday, September 7th</li>
            <li>3:00 p.m.</li>
          </details>
        </li>
        <li>
          <details>
            <summary>LOCATION</summary>
            <li>2030 Halstead Ave</li>
            <li>Lakewood, OH</li>
            <li>44107</li>
          </details>
        </li>
        <li>
          <details>
            <summary>ARRIVAL</summary>
            <li>Park on the <span style={{color: "lime"}}>street</span></li>
            <li>And walk down our driveway</li>
            <li>Or either <span style={{color: "blue"}}>Madison Park parking lot</span></li>
            <li>And walk through the <span style={{color: "red"}}>back gate</span></li>
            <div style={{display: "flex", justifyContent: "center"}}><img style={{width: "90%"}} src={arrivalMap} alt="Arrival Map" /></div>
          </details>
        </li>
        <li>
          <details>
            <summary>WHO'S INVITED</summary>
            <li>Anyone and everyone</li>
            <li className="sub-li">(as long as they are chill)</li>
            <li>Children are welcome</li>
            <li className="sub-li">(we have 2 already here)</li>
            <li>Please don't bring your dog (:</li>
          </details>
        </li>
        <li>
          <details>
            <summary>POTLUCK</summary>
            <li>We will have hot dogs (veg. available)</li>
            <li>We will have some drinks</li>
            <li>Please bring anything you'd like to share</li>
          </details>
        </li>
        <li>
          <details>
            <summary>ACTIVITIES</summary>
            <li>Some lawn games</li>
            <li>A video game</li>
            <li>Another type of game</li>
            <li>General merriment</li>
          </details>
        </li>
        <li>
          <details>
            <summary>RSVP</summary>
            <li>RSVP is <b>not</b> required</li>
            <li>You can bring whoever and whatever</li>
            <li>Don't even worry about it</li>
          </details>
        </li>
        <li>
          <details>
            <summary>RAIN PLAN</summary>
            <li>honestly idk</li>
            <li>probably just show up either way</li>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default InfoPage;
