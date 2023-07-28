import { Link } from "react-router-dom";

export default function ProgramCards() {
  return (
    <div className="program-cards">
      <div className="program-card ">
        <h3>Custom Online Personal Training & Coaching</h3>
        <p className="program-card-content ">
          The home of the best online personal training, brought to you by
          celebrity personal trainer <span>kareem amr</span>. Whether you are
          looking to get lean, lose fat or add muscle my
          <span>custom meals plans and training plans</span> canget you there.
        </p>
        <Link className="program-card-btn" to="/about">
          Learn More
        </Link>
      </div>
      <div className="program-card ">
        <h3>Why Online Training?</h3>
        <p className="program-card-content ">
          I believe the innovation and quality of my
          <span> online personal training</span>, products and techniques to be
          industry leading and provide you, the customer, with everything you
          need to achieve <span>results</span> now and to equip you for a life
          of ongoing <span>health and fitness</span>
        </p>
        <Link className="program-card-btn" to="/about/#">
          Learn More
        </Link>
      </div>
    </div>
  );
}
