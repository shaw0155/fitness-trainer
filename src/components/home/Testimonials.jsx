import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  LikeOutlined,
  HeartOutlined,
  CheckOutlined,
  AimOutlined,
} from "@ant-design/icons";

const cards = [
  {
    icon: <LikeOutlined className="testimonial-card-icon" />,
    title: "Custom Training",
    content:
      "Experience how training designed for you are your goals makes achieving your results not just possible but inevitable.",
  },
  {
    icon: <HeartOutlined className="testimonial-card-icon" />,
    title: "Calculated Nutrition",
    content:
      "See how personalised, calculated nutrition and optimised macros release the breaks on your progress.",
  },
  {
    icon: <AimOutlined className="testimonial-card-icon" />,
    title: "Real Results",
    content:
      "Want proven techniques and expert coach in your corner every step? Don’t just take my word for it, let my results do the talking.",
  },
  {
    icon: <CheckOutlined className="testimonial-card-icon" />,
    title: "Physical Fitness",
    content:
      "I have worked with 50+ actors and actresses over the past 10 years building a reputation for hero worthy results at the highest level.",
  },
];

export default function Testimonial() {
  return (
    <div className="testimonial">
      {cards.map((card) => (
        <motion.div
          className="box testimonial-card"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {card.icon}
          <h3>{card.title}</h3>
          <p className="testimonial-card-content">{card.content}</p>
          <Link to="" className="testimonial-card-button">
            Learn More
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
