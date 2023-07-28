import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <div className="mission-card">
      <img
        src="https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/mission.jpg"
        alt=""
      />
      <div className="mission-card-content">
        <h1 className="mission-card-content-title">
          My<span> Mission</span>
        </h1>
        <p className="mission-card-content-content">
          I love helping people stick with something that they not only get
          great results from but that they enjoy too. Nowadays, people know that
          their physical and mental health is worth investing in, recognising
          the benefits of outsourcing all the management of their health and
          fitness to a professional. I am 100% committed to helping you build
          better relationships with food and your own body, while building
          strength and confidence that will take not just your fitness, but your
          whole life to the next level.
        </p>
        <Link className="mission-card-content-btn" to="/about">
          Let's Start
        </Link>
      </div>
    </div>
  );
}
