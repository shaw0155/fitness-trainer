import { Link } from "react-router-dom";
import Transition from "../layout/Transition";

import {
  NodeIndexOutlined,
  AimOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  MergeCellsOutlined,
  PieChartOutlined,
} from "@ant-design/icons/lib/icons";

const serviceItems = [
  {
    icon: <NodeIndexOutlined className="services-icon" />,
    title: "coaching",
    content:
      "My job is to break it all down for you, to create you a truly custom plan which focuses on you, your goals, lifestyle, available time and ability.Easy to follow, concise training that will see you progressing every week. Learn exactly what to lift, when to lift and how much to lift every session.",
  },
  {
    icon: <AimOutlined className="services-icon" />,
    title: "calculated nutrition",
    content:
      "Calculated meals, macros planning and your own recipe database. Knowing what to eat, how much to eat and when to eat is the difference between success and failure. Don’t leave your progress to chance this year.",
  },
  {
    icon: <UsergroupAddOutlined className="services-icon" />,
    title: "support",
    content:
      "To help guide, support and motivate you through the journey you get access to me all day every day, in your corner coaching you every step. In tough times like these everyone is more successful when they know they are doing everything exactly right!",
  },
  {
    icon: <CalendarOutlined className="services-icon" />,
    title: "Habits",
    content:
      "I focus on you as an individual to instantly optimise your habits and effectively balance your energy to maximise your results",
  },
  {
    icon: <MergeCellsOutlined className="services-icon" />,
    title: "Sress",
    content:
      "Other aspects that are just as important that often get overlooked because they’re not quite as obvious. One of those is stress, we can help you manage this as part of the programme",
  },
  {
    icon: <PieChartOutlined className="services-icon" />,
    title: "Hormone function",
    content:
      "Hormone imbalances are more common as our bodies adjust biologically to age and other factors. I can also help you regain your health in away that adapts to your body and lifestyle.",
  },
];
export default function Services() {
  return (
    <div className="services-section">
      <Transition className="services-section-content">
        <h4>
          created by <span>kareem amr</span>
        </h4>
        <h2>Custom Online Personal Training & Nutriton </h2>
        <hr />
        <h3>
          Do you want to drop belly fat, enhance your muscle mass plus optimise
          your motivation, mood and testosterone levels so you can be in the
          best physical and mental shape of your life for the best years of your
          life?
        </h3>
        <Link className="services-section-btn" to="">
          start now
        </Link>
      </Transition>

      <Transition className="services">
        {serviceItems.map((item) => (
          <div className="service-item">
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </Transition>
    </div>
  );
}
