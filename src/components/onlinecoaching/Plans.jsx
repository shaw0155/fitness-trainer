import { Link } from "react-router-dom";

const plansItems = [
  {
    primary: false,
    title: "1 Months",
    price: "1500",
    specs: [
      "Ideal for anyone looking to have a completely tailored fitness programme designed to suit individual needs and fitness goals.",
      "FREE Initial Consultation",
      "Smartphone App Access",
      "Exercise Video Library",
      "Tailored Workouts & Exercise Programmes",
      "Weekly Check-ins",
      "Macronutrient Guidance",
    ],
  },
  {
    primary: false,
    title: "3 Months",
    price: "3500",
    specs: [
      "Fantastic opportunity to enhance fitness levels either within a gym or home setting.",
      "FREE Initial Consultation",
      "Smartphone App Access",
      "Exercise Video Library",
      "Tailored Workouts & Exercise Programmes",
      "Twice Weekly Phone or Video Check-ins",
      "Macronutrient Guidance",
      "Fitness Goal Setting and Advice",
      "Nutritional Guidance and Advice For Meal Preparation ",
    ],
  },
  {
    primary: true,
    title: "6 Months",
    price: "7000",
    specs: [
      "Really discover your full potential with a complete step-by-step guide helping take your fitness to the next level.",
      "FREE Initial Consultation",
      "Includes real-time home training with trainer via video (upto 5 x 45 min sessions per week)",
      "Smartphone App Access",
      "Exercise Video Library",
      "Tailored Workouts & Exercise Programmes",
      "24-7 Support via Phone and Video",
      "Macronutrient Guidance",
      "Fitness Goal Setting and Advice",
      "Fully Supported Nutrition Guidance Including Regular Reviews",
      "FREE Macronutrient Guide E-Booklet Including Meal Examples",
    ],
  },
];

export default function plans() {
  return (
    <div className="plans">
      {plansItems.map((item) => (
        <div className={item.primary ? "plans-card primary" : "plans-card"}>
          <h3 className="plans-card-title">{item.title}</h3>
          <h2>{item.price} L.E</h2>
          {item.specs.map((spec) => (
            <p>{spec}</p>
          ))}
          <Link
            to=""
            className={
              item.primary
                ? "plans-card-btn  primary-card-btn"
                : "plans-card-btn"
            }
          >
            Start Now
          </Link>
        </div>
      ))}
    </div>
  );
}
