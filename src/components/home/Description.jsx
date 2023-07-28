import { Link } from "react-router-dom";

export default function Description() {
  return (
    <div className="description">
      <div className="left description-part">
        <h2 className="description-part-title">
          Personal training & nutrition
        </h2>
        <p className="description-part-content">
          I am very fortunate to do what I do for a living. My job as a personal
          trainer has taken me all over the world and I have had some
          extraordinary experiences with my work. Whilst some aspects of my
          career have been unusual, from red carpet premiers and working on film
          sets to travelling the world. I am still the same person I was
          starting out in the fitness industry over a decade ago as a fresh
          faced 17 year old.
          <br />I take my own physical fitness very seriously. I have done my
          whole life, through a number of sports and activities for as long as I
          can remember. Being physically fit now helps to keep me focussed on my
          business and the high energy . . .
        </p>
      </div>
      <div className="right description-part">
        <h2 className="description-part-title">
          Your fitness & wellness journey starts here
        </h2>
        <p className="description-part-content">
          The home of the best online personal training, brought to you by
          celebrity personal trainer David Kingsbury. Whether you are looking to
          get lean, lose fat or add muscle my custom meals plans and training
          plans can get you there.
          <br /> The custom calorie nutrition and personalised training plans I
          provide are lifestyle focussed and suit both men and women as each and
          every meal and training plan is custom built. Your results. Made to
          order by David Kingsbury.
        </p>
        <Link className="description-part-button header-link" to="/about">
          Learn More
        </Link>
      </div>
    </div>
  );
}
