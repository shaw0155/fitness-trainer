import Transition from "../layout/Transition";
import { Link } from "react-router-dom";

export default function Startnow() {
  return (
    <div className="startnow">
      <div className="startnow-left">
        <Transition className="startnow-content">
          <h2>start transforming your body today</h2>
          <Link className="startnow-btn" to="">
            start online training
          </Link>
        </Transition>
      </div>
      <div className="startnow-right">
        <Transition className="startnow-content">
          <h3>Are you ready to step up and change for good?</h3>
          <p>
            I believe the innovation and quality of my online personal training,
            products and techniques to be industry leading and provide you, the
            customer, with everything you need to achieve results now and to
            equip you for a life of ongoing health and fitness.
          </p>
        </Transition>
      </div>
    </div>
  );
}
