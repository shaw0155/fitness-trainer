import { Link } from "react-router-dom";
import Transition from "../layout/Transition";

export default function Header() {
  return (
    <div className="onlinecoaching-header">
      <Transition className="onlinecoaching-header-content">
        <h1>
          online <span>coaching</span>
        </h1>
        <p>
          ONLINE COACHING IS TAILORED TO YOUR GOALS AND EXPERIENCE IN A WAY THAT
          SUPPORTS YOUR LIFESTYLE SO THAT YOU HAVE FLEXIBILITY TO TRAIN WHEREVER
          AND WHENEVER YOU WANT.
        </p>
        <Link className="onlinecoaching-header-btn" to="/">
          start now
        </Link>
      </Transition>
    </div>
  );
}
