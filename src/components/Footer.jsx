import fb from "../icons/facebook.png";
import insta from "../icons/instagram.png";
import yt from "../icons/youtube.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h1>
        <span>FOLLOW</span> US ON
      </h1>
      <div className="icons-container">
        <Link to="https://www.facebook.com/kareemamrsaif.1/">
          <img src={fb} alt="" />
        </Link>
        <Link to="https://www.instagram.com/kareem_amr_saif/">
          <img src={insta} alt="" />
        </Link>
        <Link to="https://www.youtube.com/@kareemamrsaif9190">
          <img src={yt} alt="" />
        </Link>
      </div>

      <hr />
      <p>
        © COPYRIGHT 2023. ALL RIGHTS RESERVED. Website Design <span>SHAW</span>
      </p>
    </footer>
  );
}
